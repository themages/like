/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-06-03 15:49:51
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 15:51:53
 * @Description: sdk 公共模块
 * @FilePath: /like/src/sdk/common.js
 */
import { Post } from "@/http/index";
import enumDevices from "@/sdk/rtc/devices/index";
import mediaStream from "@/sdk/rtc/user/index";

export function getUserDevices(obj = {}) {
  const { handler } = obj;
  return enumDevices({ handler });
}

export function createLocalStream(obj = {}) {
  const { handler, constraints } = obj;
  return mediaStream({ handler, constraints });
}

export function postData(obj = {}) {
  const { data, handler } = obj;
  Post({
    url: data.api,
    data: JSON.stringify(data),
    handler,
  });
}
