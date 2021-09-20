/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 22:53:43
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 00:23:09
 * @Description: sdk 相关事件回调
 * @FilePath: /like/src/sdk/trtc/events/sdk.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 服务器测速的回调，SDK 对多个服务器 IP 做测速，每个 IP 的测速结果通过这个回调通知
export function onSpeedTest(listener) {
  rtcCloud.on("onSpeedTest", listener);
}
