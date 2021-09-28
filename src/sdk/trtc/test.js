/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 23:00:23
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-20 23:36:04
 * @Description: 设备和网络测试
 * @FilePath: /like/src/sdk/trtc/test.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 开始进行网络测速（视频通话期间请勿测试，以免影响通话质量）
export function startSpeedTest(sdkAppId, userId, userSig) {
  return rtcCloud.startSpeedTest(sdkAppId, userId, userSig);
}
// 停止网络测速
export function stopSpeedTest() {
  return rtcCloud.stopSpeedTest();
}
// 开始进行摄像头测试
export function startCameraDeviceTest(view) {
  return rtcCloud.startCameraDeviceTest(view);
}
// 停止摄像头测试
export function stopCameraDeviceTest() {
  return rtcCloud.stopCameraDeviceTest();
}
// 开始进行麦克风测试
export function startMicDeviceTest(interval) {
  return rtcCloud.startMicDeviceTest(interval);
}
// 停止麦克风测试
export function stopMicDeviceTest() {
  return rtcCloud.stopMicDeviceTest();
}
// 开始进行扬声器测试
export function startSpeakerDeviceTest(testAudioFilePath) {
  return rtcCloud.startSpeakerDeviceTest(testAudioFilePath);
}
// 停止扬声器测试
export function stopSpeakerDeviceTest() {
  return rtcCloud.stopSpeakerDeviceTest();
}
