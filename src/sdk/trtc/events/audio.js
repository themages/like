/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:35:59
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 13:45:37
 * @Description: 麦克风音频事件回调
 * @FilePath: /like/src/sdk/trtc/events/audio.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 用户是否开启音频上行
export function onUserAudioAvailable(listener) {
  rtcCloud.on("onUserAudioAvailable", listener);
}
// 开始播放远程用户的首帧音频（本地声音暂不通知）
export function onFirstAudioFrame(listener) {
  rtcCloud.on("onFirstAudioFrame", listener);
}
// 首帧本地音频数据已经被送出
export function onSendFirstLocalAudioFrame(listener) {
  rtcCloud.on("onSendFirstLocalAudioFrame", listener);
}
// 系统音频采集回调
export function onSystemAudioLoopbackError(listener) {
  rtcCloud.on("onSystemAudioLoopbackError", listener);
}
