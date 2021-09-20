/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 23:35:32
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-20 23:47:22
 * @Description: 屏幕分享
 * @FilePath: /like/src/sdk/trtc/screenCapture.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 枚举可共享的窗口列表
export function getScreenCaptureSources(
  thumbWidth,
  thumbHeight,
  iconWidth,
  iconHeight
) {
  return rtcCloud.getScreenCaptureSources(
    thumbWidth,
    thumbHeight,
    iconWidth,
    iconHeight
  );
}
// 设置屏幕共享参数，该方法在屏幕共享过程中也可以调用
export function selectScreenCaptureTarget(
  type,
  sourceId,
  sourcename,
  captureRect,
  captureMouse,
  highlightWindow
) {
  return rtcCloud.selectScreenCaptureTarget(
    type,
    sourceId,
    sourcename,
    captureRect,
    captureMouse,
    highlightWindow
  );
}
// 启动屏幕分享，支持选择使用主路或辅路进行屏幕分享。（暂不支持 mac 平台预览界面）
export function startScreenCapture(view, type, params) {
  return rtcCloud.startScreenCapture(view, type, params);
}
// 暂停屏幕分享
export function pauseScreenCapture() {
  return rtcCloud.pauseScreenCapture();
}
// 恢复屏幕分享
export function resumeScreenCapture() {
  return rtcCloud.resumeScreenCapture();
}
// 停止屏幕分享
export function stopScreenCapture() {
  return rtcCloud.stopScreenCapture();
}
// 设置辅流（屏幕分享）的编码器参数
export function setSubStreamEncoderParam(params) {
  return rtcCloud.setSubStreamEncoderParam(params);
}
// 设置辅流（屏幕分享）的混音音量大小
export function setSubStreamMixVolume(volume) {
  return rtcCloud.setSubStreamMixVolume(volume);
}
// 将指定窗口加入屏幕分享的排除列表中，加入排除列表中的窗口不会被分享出去
export function addExcludedShareWindow(win) {
  return rtcCloud.addExcludedShareWindow(win);
}
// 将指定窗口从屏幕分享的排除列表中移除
export function removeExcludedShareWindow(win) {
  return rtcCloud.removeExcludedShareWindow(win);
}
// 将所有窗口从屏幕分享的排除列表中移除
export function removeAllExcludedShareWindow() {
  return rtcCloud.removeAllExcludedShareWindow();
}
