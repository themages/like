// 视频通话
import { videoCall } from "@/features/trtc/sdk";
import { enterRoom } from "@/sdk/trtc/room";
import store from "@/store/";
import { ROOM_SELECT_USER } from "@/store/types";
// 加入房间
export function video_enter_room(params) {
  return enterRoom(params, videoCall);
}
// 选择用户名和用户签名
export function video_select_user(token) {
  store.commit(ROOM_SELECT_USER, token);
}
