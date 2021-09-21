/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:28:22
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:37:18
 * @Description: 错误、警告等异常回调事件
 * @FilePath: /like/src/sdk/trtc/events/anomaly.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 错误回调：SDK 不可恢复的错误
export function onError(listener) {
  rtcCloud.on("onError", listener);
}
// 警告回调：用于告知您一些非严重性问题，例如出现了卡顿或者可恢复的解码失败
export function onWarning(listener) {
  rtcCloud.on("onWarning", listener);
}
