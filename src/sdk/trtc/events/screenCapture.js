/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 13:02:08
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 13:04:20
 * @Description: 屏幕分享回调事件
 * @FilePath: /like/src/sdk/trtc/events/screenCapture.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 当屏幕分享窗口被遮挡无法正常捕获时，SDK 会通过此回调通知，可在此回调里通知用户移开遮挡窗口
export function onScreenCaptureCovered(listener) {
  rtcCloud.on("onScreenCaptureCovered", listener);
}
// 当屏幕分享开始时，SDK 会通过此回调通知
export function onScreenCaptureStarted(listener) {
  rtcCloud.on("onScreenCaptureStarted", listener);
}
// 当屏幕分享暂停时，SDK 会通过此回调通知
export function onScreenCapturePaused(listener) {
  rtcCloud.on("onScreenCapturePaused", listener);
}
// 当屏幕分享停止时，SDK 会通过此回调通知
export function onScreenCaptureStopped(listener) {
  rtcCloud.on("onScreenCaptureStopped", listener);
}
