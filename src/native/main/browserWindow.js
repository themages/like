/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 16:41:26
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 16:52:25
 * @Description: 创建并控制浏览器窗口
 * @FilePath: /like/src/native/main/browserWindow.js
 */
const { BrowserWindow } = require("electron");
// 支持 macOS + Windows 系统
export function createBrowserWindow(options) {
  return new BrowserWindow(options);
}
// 所有打开的窗口的数组
export function getAllWindows() {
  return BrowserWindow.getAllWindows();
}
// 此应用程序中当前获得焦点的窗口，如果无就返回 null
export function getFocusedWindow() {
  return BrowserWindow.getFocusedWindow();
}
// 返回拥有给定 webContents的窗口，否则如果内容不属于一个窗口，返回null
export function fromWebContents(webContents) {
  return BrowserWindow.fromWebContents(webContents);
}
// 拥有给定 browserView 的窗口。 如果给定的视图没有附加到任何窗口，返回 null
export function fromBrowserView(browserView) {
  return BrowserWindow.fromBrowserView(browserView);
}
// 带有给定 id 的窗口
export function fromId(id) {
  return BrowserWindow.fromId(id);
}
// 仅支持 macOS 系统

// 仅支持 Windows 系统
