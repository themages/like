/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-06-03 15:41:01
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-03 18:00:25
 * @Description: remoteStream 本地拉流类方法
 * @FilePath: /like/src/sdk/remote.js
 */
import Peer from "@/sdk/rtc/pc/index";
import { postData } from "@/sdk/common.js";
export default class Remote {
  constructor() {
    this.remote = new Peer();
  }
  createLocalOffer(obj = {}) {
    const { handler } = obj;
    this.remote.addTransceiver({
      trackOrKind: "audio",
      init: {
        direction: "recvonly",
      },
    });
    this.remote.addTransceiver({
      trackOrKind: "video",
      init: {
        direction: "recvonly",
      },
    });
    this.remote.createOffer({
      handler: (err, offer) => {
        if (err) return handler(err);
        this.remote.setLocalDescription({
          offer,
          handler: (err) => {
            handler(err, offer);
          },
        });
      },
    });
  }
  createRemoteAnswer(obj = {}) {
    const { handler, data } = obj;
    postData({
      data,
      handler: (err, res) => {
        if (err) return handler(err);
        this.remote.setRemoteDescription({
          offer: this.remote.sessionDescription({
            answer: {
              type: "answer",
              sdp: res.sdp,
            },
          }),
          handler,
        });
      },
    });
  }
  startPlayingStream(obj = {}) {
    const { handler, callback } = obj;
    this.remote.onaddstream(callback);
    this.createLocalOffer({
      handler: (err, offer) => {
        if (err) return handler(err);
        const tid = Number(parseInt(new Date().getTime() * Math.random() * 100))
          .toString(16)
          .substr(0, 7);
        this.createRemoteAnswer({
          data: {
            api: "http://tv.canicode.cn:1985/rtc/v1/play/",
            streamurl: "webrtc://tv.canicode.cn/live/livestream",
            clientip: null,
            tid,
            sdp: offer.sdp,
          },
          handler,
        });
      },
    });
  }
  stopPlayingStream() {}
}
