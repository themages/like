/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:51:18
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:56:01
 * @Description: 测试事件回调
 * @FilePath: /like/src/sdk/trtc/events/test.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 服务器测速的回调，SDK 对多个服务器 IP 做测速，每个 IP 的测速结果通过这个回调通知
export function onSpeedTest(listener) {
  rtcCloud.on("onSpeedTest", listener);
}
// 麦克风测试音量回调
export function onTestMicVolume(listener) {
  rtcCloud.on("onTestMicVolume", listener);
}
// 扬声器测试音量回调
export function onTestSpeakerVolume(listener) {
  rtcCloud.on("onTestSpeakerVolume", listener);
}
// 当前音频采集设备音量变化回调
export function onAudioDeviceCaptureVolumeChanged(listener) {
  rtcCloud.on("onAudioDeviceCaptureVolumeChanged", listener);
}
// 当前音频播放设备音量变化回调
export function onAudioDevicePlayoutVolumeChanged(listener) {
  rtcCloud.on("onAudioDevicePlayoutVolumeChanged", listener);
}
