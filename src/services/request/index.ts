import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { HyrequestInterceptors, HyrequestConfig } from "./type";

class Hyrequest {
  instance: AxiosInstance;
  interceptors?: HyrequestInterceptors;

  constructor(config: HyrequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor as any,
      this.interceptors?.requestInterceptorCatch
    ),
      this.instance.interceptors.response.use(
        this.interceptors?.responseInterceptor,
        this.interceptors?.responseInterceptoCatch
      );
    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例请求成功拦截");
        return config;
      },
      (err) => {
        console.log("所有实例请求失败拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例响应成功拦截");
        return res;
      },
      (err) => {
        console.log("所有实例响应失败拦截");
        return err;
      }
    );
  }
  request(config: AxiosRequestConfig): void {
    // 1.单个请求对请求config的处理
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}
export default Hyrequest;
