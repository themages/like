<template>
  <div class="home">
    <div>
      <button @click.stop="test_start_sdk_speed">开始测速</button>
      <button @click.stop="test_stop_sdk_speed">停止测速</button>
      <button @click.stop="test_start_local_camera">开始预览</button>
      <button @click.stop="test_stop_local_camera">停止预览</button>
      <button @click.stop="test_start_local_mic">开始麦克风</button>
      <button @click.stop="test_stop_local_mic">停止麦克风</button>
      <button @click.stop="test_start_local_speaker">开始扬声器</button>
      <button @click.stop="test_stop_local_speaker">停止扬声器</button>
    </div>
    <div id="local"></div>
    <div>【trtc-sdk版本号：{{ version }}】</div>
    <div>【麦克风测试音量大小变化: {{ micVolume }}】</div>
    <div>【扬声器测试音量大小变化: {{ speakerVolume }}】</div>
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
  device_camera_store,
  device_mic_store,
  device_speaker_store,
} from "@/features/trtc/devices";
import {
  event_device_change,
  event_camera_ready,
  event_mic_ready,
} from "@/features/trtc/events";
export default {
  name: "Home",
  data() {
    return {
      version: "",
      micVolume: 0,
      speakerVolume: 0,
      spead: [],
    };
  },
  components: {},
  created() {
    this.version = getSDKVersion();
    event_device_change();
    device_camera_store();
    device_mic_store();
    device_speaker_store();
    event_camera_ready();
    event_mic_ready();
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
  },
};
</script>
