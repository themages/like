<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Chat">Video</router-link>
  </div>
  <router-view />
</template>
<script>
import {
  event_device_change,
  event_camera_ready,
  event_mic_ready,
} from "@/features/trtc/events";
import {
  device_camera_store,
  device_mic_store,
  device_speaker_store,
} from "@/features/trtc/devices";
event_device_change();
event_camera_ready();
event_mic_ready();
device_camera_store();
device_mic_store();
device_speaker_store();
export default {
  name: "App",
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
