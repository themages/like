import store from "@/store/";
import {
  onEnterRoom,
  onExitRoom,
  onSwitchRoom,
  onSwitchRole,
  onRemoteUserEnterRoom,
  onRemoteUserLeaveRoom,
} from "@/sdk/trtc/events/room";
import { startRemoteView, stopRemoteView } from "@/sdk/trtc/video";
import { onUserVideoAvailable } from "@/sdk/trtc/events/video";
import {
  ROOM_ENTER_CHANGE,
  ROOM_EXIT_CHANGE,
  ROOM_SWITCH_CHANGE,
  ROOM_USER_ENTER,
  ROOM_USER_LEAVE,
  ROOM_SWITCH_ROLE,
} from "@/store/types";
import { ROOM_STATUS_DEFAULT } from "@/features/trtc/types";
import { remote } from "@/features/trtc/types";
// 加入房间回调事件
export function event_room_enter() {
  onEnterRoom(function (result) {
    store.commit(ROOM_ENTER_CHANGE, result);
    store.commit(ROOM_EXIT_CHANGE, ROOM_STATUS_DEFAULT);
  });
}
// 退出房间回调事件
export function event_room_exit() {
  onExitRoom(function (reason) {
    store.commit(ROOM_ENTER_CHANGE, ROOM_STATUS_DEFAULT);
    store.commit(ROOM_EXIT_CHANGE, reason);
  });
}
// 切换房间回调事件
export function event_room_switch() {
  onSwitchRoom(function (errCode) {
    store.commit(ROOM_SWITCH_CHANGE, errCode);
  });
}
// 切换角色回调事件
export function event_room_role() {
  onSwitchRole(function (errCode) {
    store.commit(ROOM_SWITCH_ROLE, errCode);
  });
}
// 有用户加入房间
export function event_room_user_enter() {
  onRemoteUserEnterRoom(function (userId) {
    store.commit(ROOM_USER_ENTER, userId);
  });
}
// 有用户离开房间
export function event_room_user_leave() {
  onRemoteUserLeaveRoom(function (userId, reason) {
    store.commit(ROOM_USER_LEAVE, { userId, reason });
  });
}
// 创建单个远端流容器
export function findVideoView(uid) {
  let userVideoElement = document.getElementById(uid);
  if (!userVideoElement) {
    userVideoElement = document.createElement("div");
    userVideoElement.id = uid;
    userVideoElement.classList.add("videoView");
    document.getElementById(remote).appendChild(userVideoElement);
  }
  return userVideoElement;
}
// 销毁单个远端流容器
export function destroyVideoView(uid) {
  var userVideoElement = document.getElementById(uid);
  if (userVideoElement) {
    document.getElementById(remote).removeChild(userVideoElement);
  }
}
// 监听用户是否开启摄像头视频的回调事件
export function event_remote_available() {
  onUserVideoAvailable(function (uid, available) {
    if (available) {
      const view = findVideoView(uid);
      startRemoteView(uid, view);
    } else {
      stopRemoteView(uid);
      destroyVideoView(uid);
    }
  });
}
