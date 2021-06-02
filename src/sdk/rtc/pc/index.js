/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 19:22:44
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 00:10:00
 * @Description: 由本地计算机到远端的WebRTC连接的创建，保持，监控，关闭方法的实现。
 * @FilePath: /like/src/sdk/rtc/pc/index.js
 */
let pc = null;
export function createPeerConnection() {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection
  pc = new RTCPeerConnection();
}
export function createOffer(obj) {
  const { handler } = obj;
  return pc.createOffer(function (offer) {
    handler(null, offer);
  }, handler);
}
export function createAnswer(obj) {
  const { handler } = obj;
  return pc.createAnswer(function (answer) {
    handler(null, answer);
  }, handler);
}
export function setLocalDescription(obj) {
  const { handler, offer, answer } = obj;
  return pc.setLocalDescription(offer || answer, handler, handler);
}
export function setRemoteDescription(obj) {
  const { handler, offer } = obj;
  return pc.setRemoteDescription(offer, handler, handler);
}
export function sessionDescription(obj) {
  const { offer, answer } = obj;
  return new RTCSessionDescription(offer || answer);
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
