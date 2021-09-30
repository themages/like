<template>
  <div>
    <div>
      <p>【选择你要使用的账户】</p>
      <select
        name="用户账户"
        @change="video_select_user"
        v-model="userToken"
        :disabled="isJoinRoom"
      >
        <template v-for="user in token" :key="user.userId">
          <option :value="user">
            {{ user.userId }}
          </option>
        </template>
      </select>
    </div>
    <div>
      <p>【输入你要加入的房间号】</p>
      <div>
        <input
          type="text"
          v-model="roomId"
          placeholder="输入房间号"
          :disabled="isJoinRoom"
        />
      </div>
    </div>
    <p>
      <button @click.stop="video_enter_room" :disabled="isJoinRoom">
        登陆房间
      </button>
      <button @click.stop="video_exit_room" :disabled="!isJoinRoom">
        退出房间
      </button>
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";
const { mapState: roomState } = createNamespacedHelpers("room");
const { mapState: sdkState } = createNamespacedHelpers("sdk");
import {
  video_enter_room,
  video_exit_room,
  video_select_user,
} from "@/features/trtc/videoCall/";
import { ROOM_STATUS_DEFAULT } from "@/features/trtc/types";
export default {
  name: "RoomEnter",
  data() {
    return {
      userToken: null,
      roomId: "like",
      defaultStatus: ROOM_STATUS_DEFAULT,
    };
  },
  computed: {
    ...mapGetters({
      token: "token",
    }),
    ...roomState({
      currentToken: "user",
      roomEnterStatus: "roomEnterStatus",
      roomExitStatus: "roomExitStatus",
    }),
    ...sdkState({
      appId: "appId",
    }),
    isJoinRoom() {
      return this.roomEnterStatus !== this.defaultStatus;
    },
  },
  watch: {
    currentToken: {
      handler(newVal) {
        if (!this.userToken && newVal) {
          this.userToken = newVal;
        }
      },
      immediate: true,
    },
    token: {
      handler(newVal) {
        if (!this.userToken && newVal) {
          this.userToken = newVal[0];
        }
      },
      immediate: true,
    },
  },
  methods: {
    video_exit_room() {
      video_exit_room();
    },
    video_enter_room() {
      video_enter_room({
        sdkAppId: this.appId,
        userId: this.userToken.userId,
        userSig: this.userToken.userSig,
        roomId: 0,
        strRoomId: this.roomId,
      });
    },
    video_select_user() {
      video_select_user(this.userToken);
    },
  },
};
</script>

<style lang="scss" scoped></style>
