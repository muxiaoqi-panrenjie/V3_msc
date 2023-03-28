import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HyrequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptoCatch?: (error: any) => any;
}
export interface HyrequestConfig extends AxiosRequestConfig {
  interceptors?: HyrequestInterceptors;
}
