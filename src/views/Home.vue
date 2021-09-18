<template>
  <div class="home">
    <h1>home</h1>
    <div>trtc-sdk版本号：{{ version }}</div>
    <div>
      <video autoplay playsinline id="video"></video>
    </div>
    <div>
      <button @click.stop="screenSharing">屏幕分享</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getSDKVersion } from "@/sdk/";
import { screenSharing } from "@/features/";
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
  },
};
</script>
