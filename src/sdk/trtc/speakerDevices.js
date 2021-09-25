import { rtcCloud } from "@/sdk/trtc/";
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
