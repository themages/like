<template>
  <div class="home">
    <h1>home</h1>
    <div>trtc-sdk版本号：{{ version }}</div>
    <div>
      <button @click.stop="test_start_sdk_speed">开始测速</button>
      <button @click.stop="test_start_local_camera">开始预览</button>
      <button @click.stop="test_stop_local_camera">停止预览</button>
    </div>
    <div>
      <div id="local"></div>
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
import { screenSharing } from "@/features/native/";
import {
  test_start_sdk_speed,
  test_start_local_camera,
  test_stop_local_camera,
} from "@/features/trtc/test";
import { device_camera_store } from "@/features/trtc/devices";
import { event_device_change } from "@/features/trtc/events";
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
    event_device_change();
    device_camera_store();
  },
  methods: {
    screenSharing() {
      screenSharing();
    },
    test_start_sdk_speed,
    test_start_local_camera() {
      test_start_local_camera(document.getElementById("local"));
    },
    test_stop_local_camera,
  },
};
</script>
