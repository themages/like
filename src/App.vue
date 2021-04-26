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
// @ is an alias to /src

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
      const devices = navigator.mediaDevices.enumerateDevices();
      devices
        .then((devices) => {
          console.log("devices: %O", devices);
        })
        .catch((err) => {
          console.error("devices err: %O", err);
        });
    },
    getUserMedia() {
      const constraints = {
        audio: false,
        video: true,
      };
      const devices = navigator.mediaDevices.getUserMedia(constraints);
      devices
        .then((stream) => {
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
        })
        .catch((error) => {
          if (error.name === "ConstraintNotSatisfiedError") {
            this.errorMsg(
              "The resolution " +
                constraints.video.width.exact +
                "x" +
                constraints.video.width.exact +
                " px is not supported by your device."
            );
          } else if (error.name === "PermissionDeniedError") {
            this.errorMsg(
              "Permissions have not been granted to use your camera and " +
                "microphone, you need to allow the page access to your devices in " +
                "order for the demo to work."
            );
          }
          this.errorMsg("getUserMedia error: " + error.name, error);
        });
    },
    errorMsg(msg, error) {
      if (typeof error !== "undefined") {
        console.error("错误：%O, %O", error, msg);
      }
    },
  },
};
</script>
<style lang="scss" module>
.nav {
  padding: 30px;
}
</style>
