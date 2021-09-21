/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-20 22:55:25
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 02:33:51
 * @Description: 实例对象
 * @FilePath: /like/src/sdk/trtc/index.js
 */
const TRTCCloud = window.require("trtc-electron-sdk").default;
export const rtcCloud = new TRTCCloud();
// 获取 TRTCCloud 对象单例
export function getTRTCShareInstance() {
  return rtcCloud.getTRTCShareInstance();
}
// 释放 TRTCCloud 对象并清理资源
export function destroyTRTCShareInstance() {
  return rtcCloud.destroyTRTCShareInstance();
}
// 获取配置对象, 可用来打开 debug 模式
export function getConfigObject() {
  return rtcCloud.getConfigObject();
}
// 清理资源
export function destroy() {
  return rtcCloud.destroy();
}
