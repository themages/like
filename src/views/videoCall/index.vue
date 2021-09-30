<template>
  <div>
    <enter-room></enter-room>
    <div>
      <div :id="local"></div>
    </div>
    <div :id="remote"></div>
    <div>
      <div v-show="roomUserEnter">{{ roomUserEnter }} 进入了房间！</div>
      <div v-show="roomUserLeave">
        {{ roomUserLeave && roomUserLeave.userId }} 退出了房间！
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: roomState } = createNamespacedHelpers("room");
import {
  event_room_enter,
  event_room_exit,
  event_room_user_enter,
  event_room_user_leave,
  event_remote_available,
} from "@/features/trtc/events/room";
import { local, remote } from "@/features/trtc/types";
import EnterRoom from "@/views/videoCall/enter";
export default {
  name: "VideoCall",
  components: { EnterRoom },
  data() {
    return {
      local,
      remote,
    };
  },
  computed: {
    ...roomState({
      roomUserLeave: "roomUserLeave",
      roomUserEnter: "roomUserEnter",
      roomExitStatus: "roomExitStatus",
      roomEnterStatus: "roomEnterStatus",
    }),
  },
  created() {
    event_room_enter();
    event_remote_available();
    event_room_exit();
    event_room_user_enter();
    event_room_user_leave();
  },
};
</script>

<style lang="scss" scoped></style>
