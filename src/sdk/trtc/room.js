/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 02:37:10
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 02:45:44
 * @Description: 房间
 * @FilePath: /like/src/sdk/trtc/room.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 进入房间
export function enterRoom(params, scene) {
  return rtcCloud.enterRoom(params, scene);
}
// 退出房间
export function exitRoom() {
  return rtcCloud.exitRoom();
}
// 切换房间
export function switchRoom(params) {
  return rtcCloud.switchRoom(params);
}
// 切换角色，仅适用于直播场景（TRTCAppSceneLIVE 和 TRTCAppSceneVoiceChatRoom）
export function switchRole(role) {
  return rtcCloud.switchRole(role);
}
// 设置音视频数据接收模式（需要在进房前设置才能生效）
export function setDefaultStreamRecvMode(autoRecvAudio, autoRecvVideo) {
  return rtcCloud.setDefaultStreamRecvMode(autoRecvAudio, autoRecvVideo);
}
