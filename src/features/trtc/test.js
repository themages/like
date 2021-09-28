/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 00:10:23
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:52:34
 * @Description: 设备、网络测试
 * @FilePath: /like/src/features/trtc/test.js
 */
import { appId, userId, userSig } from "@/features/trtc/sdk";
import {
  startSpeedTest,
  stopSpeedTest,
  startCameraDeviceTest,
  stopCameraDeviceTest,
  startMicDeviceTest,
  stopMicDeviceTest,
  startSpeakerDeviceTest,
  stopSpeakerDeviceTest,
} from "@/sdk/trtc/test";
import {
  onSpeedTest,
  onTestMicVolume,
  onTestSpeakerVolume,
} from "@/sdk/trtc/events/test";
import { TEST_MIC_VOLUME, TEST_SPEAKER_FILE } from "@/features/trtc/types";
// 添加测速回调事件
export function test_speed_event(listener) {
  return onSpeedTest(listener);
}
export function test_mic_event(listener) {
  return onTestMicVolume(listener);
}
export function test_speaker_event(listener) {
  return onTestSpeakerVolume(listener);
}
// 开始测速
export function test_start_sdk_speed() {
  return startSpeedTest(appId, userId, userSig);
}
// 停止测速
export function test_stop_sdk_speed() {
  return stopSpeedTest();
}
// 开启本地摄像头
export function test_start_local_camera(view) {
  return startCameraDeviceTest(view);
}
// 关闭本地摄像头
export function test_stop_local_camera() {
  return stopCameraDeviceTest();
}
// 开始本地麦克风
export function test_start_local_mic() {
  return startMicDeviceTest(TEST_MIC_VOLUME);
}
// 关闭本地麦克风
export function test_stop_local_mic() {
  return stopMicDeviceTest();
}
// 开始本地扬声器
export function test_start_local_speaker() {
  return startSpeakerDeviceTest(TEST_SPEAKER_FILE);
}
// 关闭本地扬声器
export function test_stop_local_speaker() {
  return stopSpeakerDeviceTest();
}
