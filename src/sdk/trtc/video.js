/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 02:54:10
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 03:08:06
 * @Description: 视频
 * @FilePath: /like/src/sdk/trtc/videoView.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 启动本地摄像头采集和预览
export function startLocalPreview(view) {
  return rtcCloud.startLocalPreview(view);
}
// 停止本地摄像头采集和预览
export function stopLocalPreview() {
  return rtcCloud.stopLocalPreview();
}
// 是否屏蔽自己的视频画面
export function muteLocalVideo(mute) {
  return rtcCloud.muteLocalVideo(mute);
}
// 开始显示远端视频画面
export function startRemoteView(userId, view, streamType) {
  return rtcCloud.startRemoteView(userId, view, streamType);
}
// 停止显示远端视频画面，同时不再拉取该远端用户的视频数据流，同时会清理相关的视频显示资源
export function stopRemoteView(userId, streamType) {
  return rtcCloud.stopRemoteView(userId, streamType);
}
// 停止显示所有远端视频画面，同时不再拉取该远端用户的视频数据流，屏幕分享的画面也会一并被关闭
export function stopAllRemoteView() {
  return rtcCloud.stopAllRemoteView();
}
// 暂停接收指定的远端视频流，但并不释放显示资源，所以视频画面会冻屏在 mute 前的最后一帧
export function muteRemoteVideoStream(userId, mute) {
  return rtcCloud.muteRemoteVideoStream(userId, mute);
}
// 停止接收所有远端视频流
export function muteAllRemoteVideoStreams(mute) {
  return rtcCloud.muteAllRemoteVideoStreams(mute);
}
// 设置视频编码器相关参数，远端用户看到的以及云端录制出的视频文件的画面质量
export function setVideoEncoderParam(params) {
  return rtcCloud.setVideoEncoderParam(params);
}
// 设置网络流控相关参数，在各种网络环境下的调控策略（例如弱网下是“保清晰”还是“保流畅”）
export function setNetworkQosParam(params) {
  return rtcCloud.setNetworkQosParam(params);
}
// 设置本地图像（主流）的渲染参数
export function setLocalRenderParams(params) {
  return rtcCloud.setLocalRenderParams(params);
}
// 设置远端图像的渲染模式
export function setRemoteRenderParams(userId, streamType, params) {
  return rtcCloud.setRemoteRenderParams(userId, streamType, params);
}
// 设置视频编码输出的（也就是远端用户观看到的，以及服务器录制下来的）画面方向
export function setVideoEncoderRotation(rotation) {
  return rtcCloud.setVideoEncoderRotation(rotation);
}
// 设置编码器输出的画面镜像模式
export function setVideoEncoderMirror(mirror) {
  return rtcCloud.setVideoEncoderMirror(mirror);
}
// 开启大小画面双路编码模式
export function enableSmallVideoStream(enable, params) {
  return rtcCloud.enableSmallVideoStream(enable, params);
}
// 选定观看指定 userId 的大画面或小画面
export function setRemoteVideoStreamType(userId, type) {
  return rtcCloud.setRemoteVideoStreamType(userId, type);
}
// 视频画面截图
export function snapshotVideo(userId, streamType) {
  return rtcCloud.snapshotVideo(userId, streamType);
}
