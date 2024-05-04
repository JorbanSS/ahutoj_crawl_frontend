import axios from "axios";
import { push } from "notivue";

import httpErrorHandler from "./httpErrorHandler";

export let host: string;
export let port: number;

const DEFAULT_TIMEOUT = 2000;

if (import.meta.env.MODE == "production") {
  host = "/";
  // port = 4433;
} else {
  host = "http://127.0.0.1:8000/";
  // port = 8000;
}

// 请求头
export const contentType = [
  "application/json; charset=UTF-8",
  "application/x-www-form-urlencoded; charset=UTF-8",
  "multipart/form-data; charset=UTF-8",
];

const requestBaseURL = "api/";

// 创建 axios 请求实例
const Axios = axios.create({
  baseURL: host,
  timeout: DEFAULT_TIMEOUT, // 请求 2s 超时
  withCredentials: false, // 跨域请求是否需要携带 cookie
});

// 全局 http request 拦截
Axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");
    if (token && config.headers) config.headers.Authorization = token;
    config.url = requestBaseURL + config.url;
    return config;
  },
  err => {
    push.error({
      title: `Error: ${err.response.data.Code}`,
      message: err.response.data.Msg,
    })
    return Promise.reject(err.response);
  }
);

// 全局 http response 拦截
Axios.interceptors.response.use(
  res => {
    let data = res.data;
    if (data.Code == 0) {
      return data;
    } else {
      push.error({
        title: `Error: ${data.Code}`,
        message: data.Msg,
      });
      return Promise.reject(data);
    }
  },
  err => {
    push.error({
      title: `Error: ${err.name}`,
      message: err.message,
    })
    httpErrorHandler(err).then((msg) => {
      push.error({
        title: "请求错误",
        message: msg,
      });
    })
    return Promise.reject(err.response);
  }
);

export function Get(url: string, params: any, content = 0, timeout: number = DEFAULT_TIMEOUT) {
  return Axios.get(url, {
    params,
    headers: { "Content-Type": contentType[content] },
    timeout: timeout,
  });
}

export function Post(url: string, data: any, content = 0, timeout: number = DEFAULT_TIMEOUT) {
  return Axios.post(url, data, {
    headers: { "Content-Type": contentType[content] },
    timeout: timeout,
  });
}

export function Del(url: string, data: any, content = 0, timeout: number = DEFAULT_TIMEOUT) {
  return Axios.delete(url, {
    data,
    headers: { "Content-Type": contentType[content] },
    timeout: timeout,
  });
}

export function Put(url: string, data: any, content = 0, timeout: number = DEFAULT_TIMEOUT) {
  return Axios.put(url, data, {
    headers: { "Content-Type": contentType[content] },
    timeout: timeout,
  });
}

export default Axios;