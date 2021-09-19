/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-19 00:32:38
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-19 16:17:26
 * @Description: 从渲染器进程到主进程的异步通信
 * @FilePath: /like/src/native/renderer/ipcRenderer.js
 */
const { ipcRenderer } = window.require("electron");
// 支持 macOS + Windows 系统
/**
 * @description 监听 channel 事件，收到消息的时候调用 listener
 * @param channel String
 * @param listener Function { event IpcRendererEvent, ...args any[] }
 * @returns null
 */
export function addRendererListener(channel, listener) {
  return ipcRenderer.on(channel, listener);
}
/**
 * @description 移除 channel 事件监听
 * @param channel String
 * @param listener Function { ...args any[] }
 * @returns null
 */
export function removeRendererListener(channel, listener) {
  return ipcRenderer.removeListener(channel, listener);
}
/**
 * @description 向主进程发送异步消息，可以发送任意参数
 * @param channel String
 * @param ...args any[]
 * @returns null
 */
export function rendererSend(channel, args) {
  return ipcRenderer.send(channel, args);
}
/**
 * @description 向主进程发送消息，并异步期望结果
 * @param channel String
 * @param ...args any[] 使用结构化克隆算法进行序列化参数
 * @returns Promise<any>
 */
export function rendererInvoke(channel, args) {
  return ipcRenderer.invoke(channel, args);
}
/**
 * @description 向主进程发送消息，可选择转移零个或多个MessagePort对象的所有权
 * @param channel String
 * @param message any
 * @param transfer MessagePort
 * @returns null
 */
export function rendererPostMessage(channel, message, transfer) {
  return ipcRenderer.postMessage(channel, message, transfer);
}
/**
 * @description 通过 channel 发送消息到带有 webContentsId 的窗口
 * @param webContentsId Number
 * @param channel String
 * @param ...args any[]
 * @returns null
 */
export function rendererSendTo(webContentsId, channel, args) {
  return ipcRenderer.sendTo(webContentsId, channel, args);
}
