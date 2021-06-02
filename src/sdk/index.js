/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 16:09:34
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 15:27:28
 * @Description: webRTC 实现类
 * @FilePath: /like/src/sdk/index.js
 */
// import {
//   createPeerConnection,
//   createOffer,
//   setLocalDescription,
//   setRemoteDescription,
//   sessionDescription,
//   addTransceiver,
//   closePublisher,
//   getTracks,
//   addTrack,
// } from "@/sdk/config/pc/index";
import enumDevices from "@/sdk/rtc/devices/index";
import mediaStream from "@/sdk/rtc/user/index";

export function getUserDevices(obj = {}) {
  const { handler } = obj;
  return enumDevices({ handler });
}

export function getUserMedia(obj = {}) {
  const { handler, constraints } = obj;
  return mediaStream({ handler, constraints });
}
export function startPreview() {}
export function stopPreview() {}
export function startPublishingStream() {}
export function stopPublishingStream() {}
export function startPlayingStream() {}
export function stopPlayingStream() {}

export function listener() {}
