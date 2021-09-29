<template>
  <div class="home">
    <div>
      <button @click.stop="test_start_sdk_speed">开始测速</button>
      <button @click.stop="test_stop_sdk_speed">停止测速</button>
      <button @click.stop="test_start_local_camera">开始摄像头</button>
      <button @click.stop="test_stop_local_camera">停止摄像头</button>
      <button @click.stop="test_start_local_mic">开始麦克风</button>
      <button @click.stop="test_stop_local_mic">停止麦克风</button>
      <button @click.stop="test_start_local_speaker">开始扬声器</button>
      <button @click.stop="test_stop_local_speaker">停止扬声器</button>
    </div>
    <div class="devices">
      <div>【选择设备】</div>
      <div>
        <span>开始摄像头后，如果你没有看到画面，请尝试切换设备：</span>
        <select name="摄像头" v-model="switchCamera" @change="changeCamera">
          <template v-for="device in cameraDevices" :key="device.deviceId">
            <option :value="device">
              {{ device.deviceName }}
            </option>
          </template>
        </select>
      </div>
      <div>
        <span>开始麦克风后，如果你说了话而没有听到声音，请尝试切换设备：</span>
        <select name="麦克风" v-model="switchMic" @change="changeMic">
          <template v-for="device in micDevices" :key="device.deviceId">
            <option :value="device">
              {{ device.deviceName }}
            </option>
          </template>
        </select>
      </div>
      <div>
        <span>开始扬声器后，如果你没有听到声音，请尝试切换设备：</span>
        <select name="扬声器" v-model="switchSpeaker" @change="changeSpeaker">
          <template v-for="device in speakerDevices" :key="device.deviceId">
            <option :value="device">
              {{ device.deviceName }}
            </option>
          </template>
        </select>
      </div>
    </div>
    <div id="local"></div>
    <div>【trtc-sdk版本号：{{ version }}】</div>
    <div>【麦克风测试音量变化: {{ micVolume }}】</div>
    <div>【扬声器测试音量变化: {{ speakerVolume }}】</div>
    <div>
      <div v-for="result in spead" :key="result.ip">
        <div>【服务器IP地址：{{ result.ip }}】</div>
        <div>网络质量：{{ result.quality }}</div>
        <div>上行丢包率：{{ result.upLostRate }}</div>
        <div>下行丢包率：{{ result.downLostRate }}</div>
        <div>延迟：{{ result.rtt }}ms</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import { getSDKVersion } from "@/sdk/trtc/log";
import {
  test_start_sdk_speed,
  test_start_local_camera,
  test_stop_local_camera,
  test_start_local_mic,
  test_stop_local_mic,
  test_start_local_speaker,
  test_stop_local_speaker,
  test_stop_sdk_speed,
  test_speed_event,
  test_mic_event,
  test_speaker_event,
} from "@/features/trtc/test";
import {
  device_switch_camera,
  device_switch_mic,
  device_switch_speaker,
} from "@/features/trtc/devices";
export default {
  name: "Home",
  data() {
    return {
      version: "",
      micVolume: 0,
      speakerVolume: 0,
      spead: [],
      switchCamera: null,
      switchMic: null,
      switchSpeaker: null,
    };
  },
  components: {},
  created() {
    this.version = getSDKVersion();
    test_speed_event((currentResult, finishedCount, totalCount) => {
      console.log("测速结果：%O", currentResult, finishedCount, totalCount);
      this.spead.push(currentResult);
      if (finishedCount === totalCount) {
        test_stop_sdk_speed();
      }
    });
    test_mic_event((volume) => {
      console.log("麦克风测试音量回调: %O", volume);
      this.micVolume = volume;
    });
    test_speaker_event((volume) => {
      console.log("扬声器测试音量回调: %O", volume);
      this.speakerVolume = volume;
    });
  },
  computed: {
    ...mapGetters({
      camera: "camera",
      cameraDevices: "cameraDevices",
      mic: "mic",
      micDevices: "micDevices",
      speaker: "speaker",
      speakerDevices: "speakerDevices",
    }),
  },
  watch: {
    camera: {
      handler(newVal) {
        if (!this.switchCamera) {
          this.switchCamera = newVal;
        }
      },
      immediate: true,
    },
    mic: {
      handler(newVal) {
        if (!this.switchMic) {
          this.switchMic = newVal;
        }
      },
      immediate: true,
    },
    speaker: {
      handler(newVal) {
        if (!this.switchSpeaker) {
          this.switchSpeaker = newVal;
        }
      },
      immediate: true,
    },
  },
  methods: {
    test_start_sdk_speed,
    test_stop_sdk_speed,
    test_start_local_camera() {
      test_start_local_camera(document.getElementById("local"));
    },
    test_stop_local_camera,
    test_start_local_mic,
    test_stop_local_mic,
    test_start_local_speaker,
    test_stop_local_speaker,
    changeCamera() {
      console.log("选择摄像头：%O", this.switchCamera);
      device_switch_camera(this.switchCamera);
    },
    changeMic() {
      console.log("选择麦克风：%O", this.switchMic);
      device_switch_mic(this.switchMic);
    },
    changeSpeaker() {
      console.log("选择扬声器：%O", this.switchSpeaker);
      device_switch_speaker(this.switchSpeaker);
    },
  },
  beforeUnmount() {
    console.log("卸载页面");
    test_stop_sdk_speed();
    test_stop_local_camera();
    test_stop_local_mic();
    test_stop_local_speaker();
  },
};
</script>
<style lang="scss" scoped>
.devices {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
