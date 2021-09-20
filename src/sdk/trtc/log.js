/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 23:21:42
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-20 23:37:53
 * @Description: sdk 版本、日志等相关信息
 * @FilePath: /like/src/sdk/trtc/log.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 选择绘制的模式
export function setRenderMode(mode) {
  return rtcCloud.setRenderMode(mode);
}
// 设置日志回调
export function setLogCallback(callback) {
  return rtcCloud.setLogCallback(callback);
}
// 设置日志保存路径
export function setLogDirPath(path) {
  return rtcCloud.setLogDirPath(path);
}
// 启用或禁用 Log 的本地压缩
export function setLogCompressEnabled(enabled) {
  return rtcCloud.setLogCompressEnabled(enabled);
}
// 启用或禁用控制台日志打印
export function setConsoleEnabled(enabled) {
  return rtcCloud.setConsoleEnabled(enabled);
}
// 设置 Log 输出级别
export function setLogLevel(level) {
  return rtcCloud.setLogLevel(level);
}
// 获取 SDK 版本信息
export function getSDKVersion() {
  return rtcCloud.getSDKVersion();
}
