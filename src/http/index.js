/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 22:07:32
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 18:01:34
 * @Description: http 请求响应
 * @FilePath: /like/src/http/index.js
 */
import Request from "./request";

export function Post(obj = {}) {
  const { url, data, handler } = obj;
  return Request({
    url,
    data,
    method: "POST",
  })
    .then((res) => {
      handler(null, res);
    })
    .catch((err) => {
      handler(err);
    });
}
