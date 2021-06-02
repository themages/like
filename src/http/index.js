/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 22:07:32
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 19:12:33
 * @Description: http 请求响应
 * @FilePath: /like/src/http/index.js
 */
import Request from "./request";

export function Get(obj = {}) {
  const { url, data, handler, responseType } = obj;
  return Request({
    url,
    params: data,
    method: "GET",
    responseType, // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream', 浏览器专属：'blob'
  })
    .then((res) => {
      handler(null, res);
    })
    .catch((err) => {
      handler(err);
    });
}

export function Post(obj = {}) {
  const { url, data, handler, responseType } = obj;
  return Request({
    url,
    data,
    method: "POST",
    responseType,
  })
    .then((res) => {
      handler(null, res);
    })
    .catch((err) => {
      handler(err);
    });
}
