import store from "@/store/";
import {
  onEnterRoom,
  onExitRoom,
  onSwitchRoom,
  onSwitchRole,
  onRemoteUserEnterRoom,
  onRemoteUserLeaveRoom,
} from "@/sdk/trtc/events/room";
import {
  ROOM_ENTER_CHANGE,
  ROOM_EXIT_CHANGE,
  ROOM_SWITCH_CHANGE,
  ROOM_USER_ENTER,
  ROOM_USER_LEAVE,
  ROOM_SWITCH_ROLE,
} from "@/store/types";
// 加入房间回调事件
export function event_room_enter() {
  onEnterRoom(function (result) {
    store.commit(ROOM_ENTER_CHANGE, result);
  });
}
// 退出房间回调事件
export function event_room_exit() {
  onExitRoom(function (reason) {
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
