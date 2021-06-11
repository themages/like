<template>
  <div :class="$style.room">
    <div>
      <video autoplay playsinline id="player" muted></video>
      <div>
        <button @click.stop="closeVideoTrack">关闭/恢复摄像头Track</button>
        <button @click.stop="closeAudioTrack">关闭/恢复麦克风Track</button>
        <!-- <button @click.stop="stopVideoTrack">停止视频track</button>
      <button @click.stop="stopAudioTrack">停止音频track</button> -->
      </div>
    </div>
    <div id="remote" :class="$style.remote">
      <!-- <video autoplay playsinline id="remote"></video> -->
    </div>
    <div :class="$style.tip">房间内目前共有{{ all }}个人在线。</div>
  </div>
</template>
<script>
import Local from "@/sdk/local.js";
import Remote from "@/sdk/remote.js";
// import getConstraints from "@/sdk/rtc/devices/constraints.js";

import { io } from "socket.io-client";

import {
  closeVideoTrack,
  closeAudioTrack,
  stopVideoTrack,
  stopAudioTrack,
} from "@/sdk/common.js";
import enumerateDevices from "@/sdk/rtc/devices/index";
export default {
  name: "room",
  props: ["id"],
  data() {
    return {
      all: 0,
      socketIo: null,
      localStream: null,
      local: null,
      remote: {},
      closeVideo: true,
      closeAudio: true,
      audioinput: [],
      audiooutput: [],
      videoinput: [],
    };
  },
  created() {
    this.socket();
    this.gotDevices();
    // this.initSDK();
    // getConstraints({
    //   handler(err, constraints) {
    //     console.log(err, constraints);
    //   },
    // });
  },
  methods: {
    socket() {
      this.socketIo = io("https://tv.canicode.cn/like", {
        path: "/like",
        transports: ["websocket"],
      });
      this.socketIo.on("connect", () => {
        console.log("connect", this.socketIo.id);
        this.socketIo.emit("join", this.id);
      });
      this.socketIo.on("disconnect", () => {
        console.log("disconnect", this.socketIo.disconnected);
      });
      this.socketIo.on("joined", (room, users) => {
        console.log("joined room", room, users);
        if (toString.call(users) === "[object Array]") {
          this.all = users.length;
          this.initSDK({
            url: this.socketIo.id,
            success: () => {
              users.forEach((id) => {
                if (id !== this.socketIo.id) {
                  this.remotePlay({ url: id });
                }
              });
            },
          });
        } else {
          this.all += 1;
          this.remotePlay({ url: users });
        }
      });
      this.socketIo.on("leaved", (room, id) => {
        console.log("leaved room", room, id);
        this.all -= 1;
        if (this.remote[id]) {
          this.remote[id].stopPlayingStream();
          const dom = document.getElementById(id);
          dom.srcObject = null;
          dom.remove();
          delete this.remote[id];
        }
      });
      this.socketIo.on("message", (room, id, data) => {
        console.log("message", room, id, data);
      });
    },
    closeVideoTrack() {
      this.closeVideo = !this.closeVideo;
      closeVideoTrack({
        stream: this.localStream,
        enabled: this.closeVideo,
      });
    },
    closeAudioTrack() {
      this.closeAudio = !this.closeAudio;
      closeAudioTrack({
        stream: this.localStream,
        enabled: this.closeAudio,
      });
    },
    stopVideoTrack() {
      stopVideoTrack(this.localStream);
    },
    stopAudioTrack() {
      stopAudioTrack(this.localStream);
    },
    initSDK(obj = {}) {
      const { url, success } = obj;
      this.local = new Local();
      this.local.setServeConfig({ url });
      this.local.setVideoConfig(this.videoinput[0]);
      this.local.setAudioConfig(this.audioinput[0]);
      this.local.startPublishingStream({
        handler: (err) => {
          if (err) return console.error("err: %O", err);
          console.log(this.local.getSender());
          success && success();
        },
        callback: (stream) => {
          this.localStream = stream;
          const player = document.querySelector("video#player");
          player.srcObject = stream;
          console.log("推流 track: %O", this.local.getAVTracks(stream));
        },
      });
    },
    remotePlay(obj = {}) {
      const { url } = obj;
      this.remote[url] = new Remote();
      this.remote[url].setServeConfig({ url });
      this.remote[url].startPlayingStream({
        handler: (err) => {
          if (err) return console.log("拉流出错: %O", err);
        },
        callback(stream) {
          console.log("拉流正常: %O", stream);
          const warpper = document.getElementById("remote");
          const remoteVideo = document.createElement("video");
          remoteVideo.id = url;
          remoteVideo.setAttribute("autoplay", true);
          warpper.append(remoteVideo);
          setTimeout(() => {
            console.log("waiting");
            remoteVideo.srcObject = stream;
          }, 1000);
        },
      });
    },
    gotDevices() {
      enumerateDevices({
        handler: (err, devices) => {
          console.log(devices);
          devices.forEach((device) => {
            if (device.kind === "audioinput") {
              this.audioinput.push(device);
            } else if (device.kind === "audiooutput") {
              this.audiooutput.push(device);
            } else if (device.kind === "videoinput") {
              this.videoinput.push(device);
            }
          });
        },
      });
    },
  },
};
</script>
<style lang="scss" module>
.room {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #333;
}
.remote {
  flex: 1;
}
.tip {
  font-size: 12px;
  color: #999;
}
</style>
