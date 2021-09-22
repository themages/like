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
} from "@/sdk/trtc/test";
import { onSpeedTest } from "@/sdk/trtc/events/test";
// 添加测速回调事件
onSpeedTest(function (currentResult, finishedCount, totalCount) {
  console.log("测速结果：%O", currentResult, finishedCount, totalCount);
  if (finishedCount === totalCount) {
    stopSpeedTest();
  }
});
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
