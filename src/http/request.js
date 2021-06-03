/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-06-02 17:33:03
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 16:08:04
 * @Description: axios 实例对象
 * @FilePath: /like/src/http/request.js
 */
import axios from "axios";

const instance = axios.create();

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    console.log("response: %O", response);
    if (response.status === 200) {
      const data = response.data;
      // 针对 srs 接口返回的数据处理
      if (data.code) {
        return Promise.reject(data);
      }
      // 对响应数据做点什么
      return data;
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
