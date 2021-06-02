<template>
  <div id="nav" :class="$style.nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div>
    <video autoplay playsinline id="player"></video>
  </div>
  <router-view />
</template>
<script>
// 外部模块
// 1. npm 2.组件 3. 类方法
// 内部模块
// 1. 组件 2. vuex vue指令 3. 类方法 工具函数
import { postData } from "@/fetch/index";
import { getUserDevices, getUserMedia } from "@/sdk/index";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.getDevices();
    this.getUserMedia();
  },
  methods: {
    getDevices() {
      getUserDevices({
        handler(err, device) {
          if (err) console.error("devices err: %O", err);
          console.log("devices: %O", device);
        },
      });
    },
    getUserMedia() {
      const constraints = {
        audio: false,
        video: true,
      };
      getUserMedia({
        constraints,
        handler(err, stream) {
          if (err) {
            if (err.name === "ConstraintNotSatisfiedError") {
              this.errorMsg(
                "The resolution " +
                  constraints.video.width.exact +
                  "x" +
                  constraints.video.width.exact +
                  " px is not supported by your device."
              );
            } else if (err.name === "PermissionDeniedError") {
              this.errorMsg(
                "Permissions have not been granted to use your camera and " +
                  "microphone, you need to allow the page access to your devices in " +
                  "order for the demo to work."
              );
            }
            this.errorMsg("getUserMedia error: " + err.name, err);
          }
          const videoTracks = stream.getVideoTracks();
          const player = document.querySelector("video#player");
          console.log("Got stream with constraints:", constraints);
          console.log("Using video device: " + videoTracks[0].label);
          stream.onended = function () {
            console.log("stream ended");
          };
          window.stream = stream;
          player.srcObject = stream;
          console.log(player);
        },
      });
    },
    errorMsg(msg, error) {
      if (typeof error !== "undefined") {
        console.error("错误：%O, %O", error, msg);
      }
    },
    fetchServeData(sdp) {
      const data = {
        api: "http://tv.canicode.cn:1985/rtc/v1/publish/",
        streamurl: "webrtc://tv.canicode.cn/live/livestream",
        clientip: null,
        sdp,
      };
      postData({
        url: data.api,
        data,
        handler(err, data) {
          console.log("Got answer: %O", data);
          if (err || data.code) {
            return;
          }
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
