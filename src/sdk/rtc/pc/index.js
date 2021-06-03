/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 19:22:44
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 17:52:57
 * @Description: 由本地计算机到远端的WebRTC连接的创建，保持，监控，关闭方法的实现。
 * @FilePath: /like/src/sdk/rtc/pc/index.js
 */
export default class Peer {
  constructor() {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection
    this.pc = new RTCPeerConnection(null);
  }
  createOffer(obj) {
    const { handler } = obj;
    this.pc
      .createOffer()
      .then(function (offer) {
        handler(null, offer);
      })
      .catch(handler);
  }
  createAnswer(obj) {
    const { handler } = obj;
    this.pc
      .createAnswer()
      .then(function (answer) {
        handler(null, answer);
      })
      .catch(handler);
  }
  setLocalDescription(obj) {
    const { handler, offer, answer } = obj;
    this.pc.setLocalDescription(offer || answer, handler, handler);
  }
  setRemoteDescription(obj) {
    const { handler, offer } = obj;
    this.pc.setRemoteDescription(offer, handler, handler);
  }
  sessionDescription(obj) {
    const { offer, answer } = obj;
    return new RTCSessionDescription(offer || answer);
  }
  addTransceiver(obj) {
    const { trackOrKind, init } = obj;
    this.pc.addTransceiver(trackOrKind, init);
  }
  getTracks(obj) {
    return obj.mediaStream.getTracks();
  }
  addTrack(track) {
    this.pc.addTrack(track);
  }
  closePC() {
    this.pc.close();
  }
  onaddstream(callback) {
    this.pc.onaddstream = function (event) {
      console.log("event: %O", event);
      callback && callback(event.stream);
    };
  }
}
