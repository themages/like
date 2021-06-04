/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-06-03 15:08:08
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-04 14:52:43
 * @Description: localStream 本地推流类方法
 * @FilePath: /like/src/sdk/local.js
 */
import Peer from "@/sdk/rtc/pc/index";
import { createLocalStream, postData } from "@/sdk/common.js";
export default class Local {
  constructor(obj = {}) {
    const { serve } = obj;
    this.local = new Peer();
    this.serve = serve || {
      api: "http://tv.canicode.cn:1985/rtc/v1/publish/",
      streamurl: "webrtc://tv.canicode.cn/live/one",
      clientip: null,
    };
  }
  createLocalOffer(obj = {}) {
    const { handler } = obj;
    this.local.createOffer({
      handler: (err, offer) => {
        if (err) return handler(err);
        this.local.setLocalDescription({
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
        this.local.setRemoteDescription({
          offer: this.local.sessionDescription({
            type: "answer",
            sdp: res.sdp,
          }),
          handler,
        });
      },
    });
  }
  addTransceiver() {
    this.local.addTransceiver({
      trackOrKind: "audio",
      init: {
        direction: "sendonly",
      },
    });
    this.local.addTransceiver({
      trackOrKind: "video",
      init: {
        direction: "sendonly",
      },
    });
  }
  startPublishingStream(obj = {}) {
    const { handler, constraints, callback } = obj;
    this.addTransceiver();
    createLocalStream({
      constraints,
      handler: (err, mediaStream) => {
        if (err) return handler(err);
        callback && callback(mediaStream);
        this.eachTrack(mediaStream);
        this.offerToAnswer({ handler });
      },
    });
  }
  offerToAnswer(obj = {}) {
    const { handler } = obj;
    this.createLocalOffer({
      handler: (err, offer) => {
        if (err) return handler(err);
        const { api, streamurl, clientip } = this.serve;
        this.createRemoteAnswer({
          data: {
            api,
            streamurl,
            clientip,
            sdp: offer.sdp,
          },
          handler,
        });
      },
    });
  }
  eachTrack(stream) {
    const tracks = this.local.getTracks(stream);
    tracks.forEach((track) => {
      this.local.addTrack(track);
    });
  }

  startPreview() {}
  stopPreview() {}
  stopPublishingStream() {}
}
