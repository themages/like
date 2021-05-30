/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 16:09:34
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-30 19:41:34
 * @Description: webRTC 实现类
 * @FilePath: /like/src/mediaSDK/sdk/index.js
 */
import enumDevices from "@/mediaSDK/config/devices/index";
import mediaStream from "@/mediaSDK/config/userMedia/index";

let sdk = null;

export function getUserDevices(obj = {}) {
  const { handler } = obj;
  return enumDevices({ handler });
}

export function getUserMedia(obj = {}) {
  const { handler, constraints } = obj;
  return mediaStream({ handler, constraints });
}
// 1. 创建 PC 构造函数
export function rtcPeerConnection() {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection
  sdk = new RTCPeerConnection(null);
}
// 2. 呼叫方初始化
export function createOffer() {
  sdk.createOffer(function (offer) {
    sdk.setLocalDescription(
      new RTCSessionDescription(offer),
      function () {
        // send the offer to a server to be forwarded to the friend you're calling.
      },
      endCall
    );
  }, endCall);
}

export function closePublisher() {
  sdk.close();
}
export function endCall() {
  const videos = document.getElementsByTagName("video");
  for (let i = 0; i < videos.length; i++) {
    videos[i].pause();
  }
  closePublisher();
}
