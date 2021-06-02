<template>
  <div id="nav" :class="$style.nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div>
    <video autoplay playsinline id="player" muted></video>
  </div>
  <router-view />
</template>
<script>
// 外部模块
// 1. npm 2.组件 3. 类方法
// 内部模块
// 1. 组件 2. vuex vue指令 3. 类方法 工具函数
import { startPublishingStream } from "@/sdk/index";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.initSDK();
  },
  methods: {
    initSDK() {
      startPublishingStream({
        handler(err) {
          if (err) return console.error("err: %O", err);
        },
        constraints: { video: true, audio: true },
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
