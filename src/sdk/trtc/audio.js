/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:09:10
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:22:07
 * @Description: 音频
 * @FilePath: /like/src/sdk/trtc/audio.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 开启本地音频的采集和上行，SDK 并不会默认开启本地的音频上行
export function startLocalAudio(quality) {
  return rtcCloud.startLocalAudio(quality);
}
// 关闭本地音频的采集和上行
export function stopLocalAudio() {
  return rtcCloud.stopLocalAudio();
}
// 静音本地的音频，只会发送码率极低的静音包
export function muteLocalAudio(mute) {
  return rtcCloud.muteLocalAudio(mute);
}
// 静音掉某一个用户的声音，同时不再拉取该远端用户的音频数据流
export function muteRemoteAudio(userId, mute) {
  return rtcCloud.muteRemoteAudio(userId, mute);
}
// 静音掉所有用户的声音，同时不再拉取该远端用户的音频数据流
export function muteAllRemoteAudio(mute) {
  return rtcCloud.muteAllRemoteAudio(mute);
}
// 设置某个远程用户的播放音量
export function setRemoteAudioVolume(userId, volume) {
  return rtcCloud.setRemoteAudioVolume(userId, volume);
}
// 设置 SDK 采集音量
export function setAudioCaptureVolume(volume) {
  return rtcCloud.setAudioCaptureVolume(volume);
}
// 获取 SDK 采集音量
export function getAudioCaptureVolume() {
  return rtcCloud.getAudioCaptureVolume();
}
// 设置 SDK 播放音量
export function setAudioPlayoutVolume(volume) {
  return rtcCloud.setAudioPlayoutVolume(volume);
}
// 获取 SDK 播放音量
export function getAudioPlayoutVolume() {
  return rtcCloud.getAudioPlayoutVolume();
}
// 启用或关闭音量大小提示
export function enableAudioVolumeEvaluation(interval) {
  return rtcCloud.enableAudioVolumeEvaluation(interval);
}
// 开始录音
export function startAudioRecording(path) {
  return rtcCloud.startAudioRecording(path);
}
// 停止录音，如果调用 exitRoom 时还在录音，录音会自动停止
export function stopAudioRecording() {
  return rtcCloud.stopAudioRecording();
}
