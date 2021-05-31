/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 19:22:44
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-05-31 17:04:59
 * @Description: 由本地计算机到远端的WebRTC连接的创建，保持，监控，关闭方法的实现。
 * @FilePath: /like/src/mediaSDK/config/RTCPeerConnection/index.js
 */
let pc = null;
export function createPeerConnection() {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection
  pc = new RTCPeerConnection(null);
}
export function createOffer(obj) {
  return pc.createOffer(
    function (offer) {
      obj.handler(null, offer);
    },
    function (error) {
      obj.handler(error);
    },
    obj.options || false
  );
}
export function createAnswer(obj) {
  return pc.createAnswer(
    function (answer) {
      obj.handler(null, answer);
    },
    function (error) {
      obj.handler(error);
    },
    obj.options || true
  );
}
export function setLocalDescription(obj) {
  return pc.setLocalDescription(
    obj.offer || obj.answer,
    function () {
      obj.handler(null);
    },
    function (error) {
      obj.handler(error);
    }
  );
}
export function setRemoteDescription(obj) {
  return pc.setRemoteDescription(
    obj.offer,
    function () {
      obj.handler(null);
    },
    function (error) {
      obj.handler(error);
    }
  );
}
export function sessionDescription(obj) {
  return new RTCSessionDescription(obj.offer || obj.answer);
}
export function addTransceiver(obj) {
  return pc.addTransceiver(obj.trackOrKind, obj.init);
}
export function getTracks(obj) {
  return obj.mediaStream.getTracks();
}
export function addTrack(track) {
  return pc.addTrack(track);
}
export function closePC() {
  return pc.close();
}
