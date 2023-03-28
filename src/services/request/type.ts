import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HyrequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
export interface HyrequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HyrequestInterceptors<T>;
  showLoading?: boolean;
}
