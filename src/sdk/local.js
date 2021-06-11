/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-06-03 15:08:08
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-11 16:11:45
 * @Description: localStream 本地推流类方法
 * @FilePath: /like/src/sdk/local.js
 */
import Peer from "@/sdk/rtc/pc/index";
import {
  createLocalStream,
  postData,
  getTracks,
  getAudioTracks,
  getVideoTracks,
} from "@/sdk/common.js";
export default class Local {
  constructor() {
    this.local = new Peer();
    this.serve = {};
    this.constraints = {};
  }
  setServeConfig(obj = {}) {
    const { url } = obj; // ip,
    this.serve = {
      // api: `http://${ip}:1985/rtc/v1/publish/`,
      api: "https://tv.canicode.cn/publish/",
      streamurl: `webrtc://118.193.36.25/${url}`,
      // clientip: null,
    };
  }
  setVideoConfig(obj = {}) {
    const { deviceId = "default", groupId } = obj;
    this.constraints.video = {
      aspectRatio: 1.3333333333333333,
      deviceId,
      frameRate: 30,
      facingMode: "user",
      groupId,
      height: 240,
      resizeMode: "crop-and-scale",
      width: 320,
    };
  }
  setAudioConfig(obj = {}) {
    const { deviceId = "default", groupId } = obj;
    // https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext
    const audioCtx = new AudioContext();
    const sampleRate = audioCtx.sampleRate;
    audioCtx.close();
    this.constraints.audio = {
      autoGainControl: true,
      channelCount: 1,
      deviceId,
      echoCancellation: true,
      groupId,
      latency: 0.002666,
      noiseSuppression: true,
      sampleRate,
      sampleSize: 16,
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
    // this.setVideoConfig();
    // this.setAudioConfig();
    // this.setServeConfig();
  }
  startPublishingStream(obj = {}) {
    const { handler, constraints = this.constraints, callback } = obj;
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
    const tracks = getTracks(stream);
    tracks.forEach((track) => {
      this.local.addTrack(track);
    });
  }
  getAVTracks(stream) {
    return {
      audioTrack: getAudioTracks(stream),
      videoTrack: getVideoTracks(stream),
    };
  }
  getSender() {
    return this.local.getSenders();
  }

  startPreview() {}
  stopPreview() {}
  stopPublishingStream() {
    this.local.closePC();
  }
}
