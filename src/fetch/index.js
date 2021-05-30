/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 22:07:32
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-30 22:33:44
 * @Description: fetch 请求响应
 * @FilePath: /like/src/fetch/index.js
 */
export function postData(obj = {}) {
  const { url, data, handler } = obj;
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, omit
    headers: {
      "content-type": "application/json",
    },
    method: "POST", // GET, POST, PUT, DELETE
    mode: "cors", // no-cors, cors, same-origin
    redirect: "follow", // manual, follow, error
    referrer: "no-referrer", // client, no-referrer
  })
    .then((response) => handler(null, response.json())) // parses response to JSON
    .catch((error) => handler(error));
}
