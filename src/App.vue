<template>
  <!-- <div id="nav" :class="$style.nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div>
    <video autoplay playsinline id="player" muted></video>
    <video autoplay playsinline id="remote"></video>
  </div>
  <div>
    <button @click.stop="closeVideoTrack">关闭/恢复视频track</button>
    <button @click.stop="closeAudioTrack">关闭/恢复音频track</button>
    <button @click.stop="stopVideoTrack">停止视频track</button>
    <button @click.stop="stopAudioTrack">停止音频track</button>
  </div>
  <!-- <router-view /> -->
</template>
<script>
// 外部模块
// 1. npm 2.组件 3. 类方法
// 内部模块
// 1. 组件 2. vuex vue指令 3. 类方法 工具函数
import Local from "@/sdk/local.js";
import Remote from "@/sdk/remote.js";
import getConstraints from "@/sdk/rtc/devices/constraints.js";

import { io } from "socket.io-client";

import {
  closeVideoTrack,
  closeAudioTrack,
  stopVideoTrack,
  stopAudioTrack,
} from "@/sdk/common.js";
export default {
  name: "App",
  data() {
    return {
      localStream: null,
      local: null,
      closeVideo: true,
      closeAudio: true,
    };
  },
  created() {
    this.socket();
    this.socket2();
    // this.initSDK();
    getConstraints({
      handler(err, constraints) {
        console.log(err, constraints);
      },
    });
  },
  methods: {
    socket() {
      const socket = io("ws://localhost:3700", {
        transports: ["websocket"],
      });
      socket.on("connect", () => {
        console.log("connect", socket.id);
      });
      socket.on("disconnect", () => {
        console.log("disconnect", socket.disconnected);
      });
      socket.on("joined", (room, id) => {
        console.log("joined room", room, id);
      });
      socket.on("leaved", (room, id) => {
        console.log("leaved room", room, id);
      });
      socket.on("message", (room, id, data) => {
        console.log("message", room, id, data);
      });
      socket.emit("join", "123");
    },
    socket2() {
      const socket = io("ws://localhost:3700", {
        transports: ["websocket"],
      });
      socket.on("connect", () => {
        console.log("connect", socket.id);
      });
      socket.on("disconnect", () => {
        console.log("disconnect", socket.disconnected);
      });
      socket.on("joined", (room, id) => {
        console.log("joined room", room, id);
      });
      socket.on("leaved", (room, id) => {
        console.log("leaved room", room, id);
      });
      socket.on("message", (room, id, data) => {
        console.log("message", room, id, data);
      });
      socket.emit("join", "123");
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
    initSDK() {
      this.local = new Local();
      this.local.startPublishingStream({
        handler: (err) => {
          if (err) return console.error("err: %O", err);
          console.log(this.local.getSender());
          this.publish();
        },
        callback: (stream) => {
          this.localStream = stream;
          const player = document.querySelector("video#player");
          player.srcObject = stream;
          console.log("推流 track: %O", this.local.getAVTracks(stream));
        },
      });
    },
    publish() {
      const remote = new Remote();
      remote.startPlayingStream({
        handler: (err) => {
          if (err) return console.log("拉流出错: %O", err);
        },
        callback(stream) {
          console.log("拉流正常: %O", stream);
          const playing = document.getElementById("remote");
          console.log("拉流 track: %O", remote.getAVTracks(stream));
          playing.srcObject = stream;
        },
      });
    },
  },
};
</script>
<style lang="scss" module>
.nav {
  padding: 30px;
}
</style>
