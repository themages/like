/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 00:33:19
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 02:35:14
 * @Description: 从桌面捕获音频和视频的媒体源的信息
 * @FilePath: /like/src/native/modular/desktopCapturer.js
 */
const { desktopCapturer } = window.require("electron");

// 支持 macOS + Windows 系统
/**
 * @description 捕获桌面屏幕或应用窗口内容
 * @param options
 * types: ["screen", "window"]
 * thumbnailSize: 默认 150 x 150，可选值
 * fetchWindowIcons：true 获取窗口图标，false 默认，不获取
 * @returns Promise<DesktopCapturerSource[]>
 */
export function getSources(options) {
  return desktopCapturer.getSources(options);
}
// 仅支持 macOS 系统

// 仅支持 Windows 系统
