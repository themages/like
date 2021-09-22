/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 00:01:21
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 00:02:23
 * @Description: 摄像头设备
 * @FilePath: /like/src/sdk/trtc/cameraDevices.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 获取摄像头设备列表
export function getCameraDevicesList() {
  return rtcCloud.getCameraDevicesList();
}
// 设置要使用的摄像头
export function setCurrentCameraDevice(deviceId) {
  return rtcCloud.setCurrentCameraDevice(deviceId);
}
// 获取当前使用的摄像头
export function getCurrentCameraDevice() {
  return rtcCloud.getCurrentCameraDevice();
}
