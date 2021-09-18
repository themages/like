/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 00:37:27
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 00:52:27
 * @Description: 获取系统首选项
 * @FilePath: /like/src/native/api/systemPreferences.js
 */
const { systemPreferences } = require("electron");

// 支持 macOS + Windows 系统
/**
 * @description 捕获屏幕内容需要用户同意授权访问麦克风和摄像头
 * @param mediaType String { microphone, camera 或 screen }
 * @returns String { not-determined， granted， denied， restricted 或 unknown }
 */
export function getMediaAccessStatus(mediaType) {
  return systemPreferences.getMediaAccessStatus(mediaType);
}
// 仅支持 macOS 系统

// 仅支持 Windows 系统
