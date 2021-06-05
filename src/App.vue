<template>
  <div id="nav" :class="$style.nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div>
    <video autoplay playsinline id="player" muted></video>
    <video autoplay playsinline id="remote" muted></video>
  </div>
  <router-view />
</template>
<script>
// 外部模块
// 1. npm 2.组件 3. 类方法
// 内部模块
// 1. 组件 2. vuex vue指令 3. 类方法 工具函数
import Local from "@/sdk/local.js";
import Remote from "@/sdk/remote.js";
import getConstraints from "@/sdk/rtc/devices/constraints.js";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.initSDK();
    getConstraints({
      handler(err, constraints) {
        console.log(err, constraints);
      },
    });
  },
  methods: {
    initSDK() {
      const local = new Local();
      local.startPublishingStream({
        handler: (err) => {
          if (err) return console.error("err: %O", err);
          this.publish();
        },
        callback(stream) {
          const player = document.querySelector("video#player");
          player.srcObject = stream;
          console.log("推流 track: %O", local.getAVTracks(stream));
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
