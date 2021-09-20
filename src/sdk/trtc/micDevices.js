/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 23:52:38
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 00:00:35
 * @Description: 音频设备
 * @FilePath: /like/src/sdk/trtc/micDevices.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 获取麦克风设备列表
export function getMicDevicesList() {
  return rtcCloud.getMicDevicesList();
}
// 获取当前选择的麦克风
export function getCurrentMicDevice() {
  return rtcCloud.getCurrentMicDevice();
}
// 设置要使用的麦克风
export function setCurrentMicDevice(micId) {
  return rtcCloud.setCurrentMicDevice(micId);
}
// 获取系统当前麦克风设备音量
export function getCurrentMicDeviceVolume() {
  return rtcCloud.getCurrentMicDeviceVolume();
}
// 设置系统当前麦克风设备的音量
export function setCurrentMicDeviceVolume(volume) {
  return rtcCloud.setCurrentMicDeviceVolume(volume);
}
// 设置系统当前麦克风设备的静音状态
export function setCurrentMicDeviceMute(mute) {
  return rtcCloud.setCurrentMicDeviceMute(mute);
}
// 获取系统当前麦克风设备是否静音
export function getCurrentMicDeviceMute() {
  return rtcCloud.getCurrentMicDeviceMute();
}
// 获取扬声器设备列表
export function getSpeakerDevicesList() {
  return rtcCloud.getSpeakerDevicesList();
}
// 获取当前的扬声器设备
export function getCurrentSpeakerDevice() {
  return rtcCloud.getCurrentSpeakerDevice();
}
// 设置要使用的扬声器
export function setCurrentSpeakerDevice(speakerId) {
  return rtcCloud.setCurrentSpeakerDevice(speakerId);
}
// 获取系统当前扬声器设备音量
export function getCurrentSpeakerVolume() {
  return rtcCloud.getCurrentSpeakerVolume();
}
// 设置系统当前扬声器设备音量
export function setCurrentSpeakerVolume(volume) {
  return rtcCloud.setCurrentSpeakerVolume(volume);
}
// 设置系统当前扬声器设备的静音状态
export function setCurrentSpeakerDeviceMute(mute) {
  return rtcCloud.setCurrentSpeakerDeviceMute(mute);
}
// 获取系统当前扬声器设备是否静音
export function getCurrentSpeakerDeviceMute() {
  return rtcCloud.getCurrentSpeakerDeviceMute();
}
