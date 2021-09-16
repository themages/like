/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-17 00:32:05
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-17 00:37:57
 * @Description: trtc sdk
 * @FilePath: /like/src/sdk/index.js
 */

const TRTCCloud = window.require("trtc-electron-sdk").default;
// import TRTCCloud from 'trtc-electron-sdk';
const rtcCloud = new TRTCCloud();
// 获取 SDK 版本号
export function getSDKVersion() {
  return rtcCloud.getSDKVersion();
}
