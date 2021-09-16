<template>
  <div class="home">
    <h1>home</h1>
    <div>trtc-sdk版本号：{{ version }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getSDKVersion } from "@/sdk/";
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
};
</script>
