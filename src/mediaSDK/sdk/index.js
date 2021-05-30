/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 16:09:34
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-30 23:09:10
 * @Description: webRTC 实现类
 * @FilePath: /like/src/mediaSDK/sdk/index.js
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
// } from "@/mediaSDK/config/RTCPeerConnection/index";
import enumDevices from "@/mediaSDK/config/devices/index";
import mediaStream from "@/mediaSDK/config/userMedia/index";

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
