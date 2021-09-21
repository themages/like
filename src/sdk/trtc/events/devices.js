/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:49:34
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:50:35
 * @Description: 设备状态
 * @FilePath: /like/src/sdk/trtc/events/devices.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 摄像头准备就绪
export function onCameraDidReady(listener) {
  rtcCloud.on("onCameraDidReady", listener);
}
// 麦克风准备就绪
export function onMicDidReady(listener) {
  rtcCloud.on("onMicDidReady", listener);
}
// userId 对应的成员语音音量
export function onUserVoiceVolume(listener) {
  rtcCloud.on("onUserVoiceVolume", listener);
}
// 本地设备通断回调
export function onDeviceChange(listener) {
  rtcCloud.on("onDeviceChange", listener);
}
