/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:43:29
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:47:49
 * @Description: 网络质量、连接状态、测速
 * @FilePath: /like/src/sdk/trtc/events/network.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 网络质量：该回调每2秒触发一次，统计当前网络的上行和下行质量，userId == '' 代表自己当前的视频质量
export function onNetworkQuality(listener) {
  rtcCloud.on("onNetworkQuality", listener);
}
// 技术指标统计回调，每2秒回调一次
export function onStatistics(listener) {
  rtcCloud.on("onStatistics", listener);
}
// SDK 跟服务器的连接断开
export function onConnectionLost(listener) {
  rtcCloud.on("onConnectionLost", listener);
}
// SDK 尝试重新连接到服务器
export function onTryToReconnect(listener) {
  rtcCloud.on("onTryToReconnect", listener);
}
// SDK 跟服务器的连接恢复
export function onConnectionRecovery(listener) {
  rtcCloud.on("onConnectionRecovery", listener);
}
