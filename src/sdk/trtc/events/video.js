/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-09-21 03:36:25
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-09-21 13:45:12
 * @Description: 摄像头视频事件回调
 * @FilePath: /like/src/sdk/trtc/events/video.js
 */
import { rtcCloud } from "@/sdk/trtc/";
// 用户是否开启摄像头视频
export function onUserVideoAvailable(listener) {
  rtcCloud.on("onUserVideoAvailable", listener);
}
// 用户是否开启了辅路画面（一般用于屏幕分享）
export function onUserSubStreamAvailable(listener) {
  rtcCloud.on("onUserSubStreamAvailable", listener);
}
// 开始渲染本地或远程用户的首帧画面
export function onFirstVideoFrame(listener) {
  rtcCloud.on("onFirstVideoFrame", listener);
}
// 首帧本地视频数据已经被送出
export function onSendFirstLocalVideoFrame(listener) {
  rtcCloud.on("onSendFirstLocalVideoFrame", listener);
}
// 截图完成时回调
export function onSnapshotComplete(listener) {
  rtcCloud.on("onSnapshotComplete", listener);
}
