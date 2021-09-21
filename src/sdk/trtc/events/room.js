/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:31:45
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:34:26
 * @Description: 房间回调事件
 * @FilePath: /like/src/sdk/trtc/events/room.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 已加入房间的回调
export function onEnterRoom(listener) {
  rtcCloud.on("onEnterRoom", listener);
}
// 退出房间的事件回调
export function onExitRoom(listener) {
  rtcCloud.on("onExitRoom", listener);
}
// 切换房间的事件回调
export function onSwitchRoom(listener) {
  rtcCloud.on("onSwitchRoom", listener);
}
// 切换角色的事件回调
export function onSwitchRole(listener) {
  rtcCloud.on("onSwitchRole", listener);
}
// 有用户加入当前房间
export function onRemoteUserEnterRoom(listener) {
  rtcCloud.on("onRemoteUserEnterRoom", listener);
}
// 有用户离开当前房间
export function onRemoteUserLeaveRoom(listener) {
  rtcCloud.on("onRemoteUserLeaveRoom", listener);
}
