// 视频通话
import {
  videoCall,
  sdkParams,
  videoEncParam,
  videoResolution,
  videoResolutionMode,
} from "@/features/trtc/sdk";
import { local } from "@/features/trtc/types";
import {
  setVideoEncoderParam,
  startLocalPreview,
  stopLocalPreview,
} from "@/sdk/trtc/video";
import { startLocalAudio, stopLocalAudio } from "@/sdk/trtc/audio";
import { enterRoom, exitRoom, setDefaultStreamRecvMode } from "@/sdk/trtc/room";
import store from "@/store/";
import { USERS_SELECT_USER } from "@/store/types";
// 加入房间
export function video_enter_room(params) {
  const { sdkAppId, userId, userSig, roomId, strRoomId, role } = params;
  // 进房
  enterRoom(
    new sdkParams(sdkAppId, userId, userSig, roomId, strRoomId, role),
    videoCall
  );
  // 视频编码参数
  video_encode_param();
  // 打开采集和预览本地视频、采集音频
  video_enable_capture(true);
  video_enable_audio_capture(true);
}
// 设置视频编码参数
export function video_encode_param(obj = {}) {
  const {
    resolution,
    resMode,
    videoFps,
    videoBitrate,
    minVideoBitrate,
    enableAdjustRes,
  } = obj;
  return setVideoEncoderParam(
    new videoEncParam(
      resolution || videoResolution.TRTCVideoResolution_640_360,
      resMode || videoResolutionMode.TRTCVideoResolutionModeLandscape,
      videoFps || 15,
      videoBitrate || 550,
      minVideoBitrate,
      enableAdjustRes
    )
  );
}
// 开启本地视频
export function video_enable_capture(enable) {
  if (enable) {
    startLocalPreview(document.getElementById(local));
  } else {
    stopLocalPreview();
  }
}
// 开启本地音频
export function video_enable_audio_capture(enable) {
  if (enable) {
    startLocalAudio();
  } else {
    stopLocalAudio();
  }
}
// 退出房间
export function video_exit_room() {
  return exitRoom();
}
// 选择用户名和用户签名
export function video_select_user(token) {
  store.commit(USERS_SELECT_USER, token);
}
// 默认进房后自动接收音视频
export function video_stream_recvMode() {
  return setDefaultStreamRecvMode(true, true);
}
