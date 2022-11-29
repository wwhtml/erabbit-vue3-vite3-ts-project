// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from "axios";
import type {
  // AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

// console.log(import.meta.env);

//开发模式和生产模式 baseUrl 被赋值不同（这个和下面设置的环境变量相关）
const baseURL = "/api";

// console.log(baseURL);

const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  withCredentials: false, //表示跨域请求时是否需要使用凭证 默认 default
  timeout: 5000,
});

//请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //根据实际情况进行配置(需要结合后端接口返回的数据，以及前端需要的效果进行分析)
    //...
    //...
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

//响应拦截
instance.interceptors.response.use(
  (res: AxiosResponse): Promise<any> => {
    // console.log(res);
    // console.log(res.data);
    return res.data;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

//封装常用的方法并导出
//这里是重点，也是 TS 封装 Axios 的重点。使用 TS 无非要获得良好的代码提示，我们在调用接口时编辑器能提示出该接口的返回值有哪些。
//参考：https://juejin.cn/post/7154991998989959181

//为什么要封装公共请求方法
//之所以封装这一层公共请求方法，主要目的就是为了帮编译器正确识别类型。方法就是手动设置返回类型。如果直接使用 axios 实例的请求方法，就需要在每次调用时都指定一遍，当接口有几十上百个时，多少会在增加一些工作量。所以就在这里多加一层，提前将类型制定好。

export default {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, config);
  },
  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return instance.post(url, data, config);
  },
  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return instance.put(url, data, config);
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.delete(url, config);
  },
};
