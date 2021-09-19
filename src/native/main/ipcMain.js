/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 16:15:12
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 16:29:06
 * @Description: 从主进程到渲染进程的异步通信
 * @FilePath: /like/src/native/main/ipcMain.js
 */
const { ipcMain } = require("electron");
// 支持 macOS + Windows 系统
/**
 * @description 监听 channel 事件，收到消息的时候调用 listener
 * @param channel String
 * @param listener Function { event IpcMainEvent, ...args any[] }
 * @returns null
 */
export function addMainListener(channel, listener) {
  return ipcMain.on(channel, listener);
}
/**
 * @description 移除 channel 事件监听
 * @param channel String
 * @param listener Function { ...args any[] }
 * @returns null
 */
export function removeMainListener(channel, listener) {
  return ipcMain.removeListener(channel, listener);
}
/**
 * @description 为一个 invokeable 的 IPC 添加一个 handler
 * @param channel String
 * @param listener { event IpcMainInvokeEvent, ...args any[] }
 * @returns null
 */
export function addMainHandle(channel, listener) {
  return ipcMain.handle(channel, listener);
}
/**
 * @description 移除 invokeable 的 IPC 一个 handler
 * @param channel String
 * @returns null
 */
export function removeMainHandle(channel) {
  return ipcMain.removeHandle(channel);
}
