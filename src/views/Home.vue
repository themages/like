<template>
  <div class="home">
    <h1>home</h1>
    <div>trtc-sdk版本号：{{ version }}</div>
    <div>
      <button @click.stop="test_start_sdk_speed">开始测速</button>
    </div>
    <div>
      <video autoplay playsinline id="sharing"></video>
    </div>
    <div>
      <button @click.stop="screenSharing">屏幕分享</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getSDKVersion } from "@/sdk/trtc/log";
import { screenSharing } from "@/features/";
import { test_start_sdk_speed } from "@/features/test";
export default {
  name: "Home",
  data() {
    return {
      version: "",
    };
  },
  components: {},
  created() {
    this.version = getSDKVersion();
  },
  methods: {
    screenSharing() {
      screenSharing();
    },
    test_start_sdk_speed,
  },
};
</script>
