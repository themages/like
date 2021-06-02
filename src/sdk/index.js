/**
 * @Author: 曾星旗 <me@zengxingqi.com>
 * @Date: 2021-05-30 16:09:34
 * @LastEditors: 曾星旗 <me@zengxingqi.com>
 * @LastEditTime: 2021-06-02 23:44:58
 * @Description: webRTC 实现类
 * @FilePath: /like/src/sdk/index.js
 */
import { Post } from "@/http/index";
import {
  createPeerConnection,
  createOffer,
  setLocalDescription,
  setRemoteDescription,
  sessionDescription,
  // addTransceiver,
  // closePC,
  getTracks,
  addTrack,
} from "@/sdk/rtc/pc/index";
import enumDevices from "@/sdk/rtc/devices/index";
import mediaStream from "@/sdk/rtc/user/index";

export function getUserDevices(obj = {}) {
  const { handler } = obj;
  return enumDevices({ handler });
}

export function createLocalStream(obj = {}) {
  const { handler, constraints } = obj;
  return mediaStream({ handler, constraints });
}

export function createLocalPeer(obj = {}) {
  const { mediaStream } = obj;
  createPeerConnection();
  eachTrack({ mediaStream });
}

export function createLocalOffer(obj = {}) {
  const { handler } = obj;
  createOffer({
    handler(err, offer) {
      if (err) return handler(err);
      setLocalDescription({
        offer: sessionDescription({ offer }),
        handler(err) {
          handler(err, offer);
        },
      });
    },
  });
}

export function createRemoteAnswer(obj = {}) {
  const { handler, data } = obj;
  postData({
    data,
    handler(err, res) {
      if (res) {
        res = res.data;
      }
      console.log("响应： %O", res);
      if (err || res.code) return handler(err || res);
      setRemoteDescription({
        offer: sessionDescription({
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

export function eachTrack(obj = {}) {
  const { mediaStream } = obj;
  const tracks = getTracks({ mediaStream });
  tracks.forEach((track) => {
    addTrack(track);
  });
}
export function startPreview() {}
export function stopPreview() {}
export function startPublishingStream(obj = {}) {
  const { handler, constraints } = obj;
  createLocalStream({
    constraints,
    handler(err, mediaStream) {
      if (err) return;
      const player = document.querySelector("video#player");
      player.srcObject = mediaStream;
      createLocalPeer({ mediaStream });
      createLocalOffer({
        handler(err, offer) {
          if (err) return;
          createRemoteAnswer({
            data: {
              api: "http://tv.canicode.cn:1985/rtc/v1/publish/",
              streamurl: "webrtc://tv.canicode.cn/live/livestream",
              clientip: null,
              sdp: offer.sdp,
            },
            handler,
          });
        },
      });
    },
  });
}
export function stopPublishingStream() {}
export function startPlayingStream() {}
export function stopPlayingStream() {}

export function listener() {}
export function postData(obj = {}) {
  const { data, handler } = obj;
  Post({
    url: data.api,
    data: JSON.stringify(data),
    handler,
  });
}
