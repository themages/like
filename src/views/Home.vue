<template>
  <div :class="$style.home">
    <div :class="$style.warpper">
      <!-- <div>
      <span>用户名：</span>
      <input type="text" placeholder="请输入" v-model="name" />
    </div> -->
      <div>
        <span>房间号：</span>
        <input type="text" placeholder="请输入" v-model="room" />
      </div>
      <!-- <div>
      <span>服务器：</span>
      <select v-model="streamurl" @change="selectRtc">
        <option selected="selected" value="">请选择</option>
        <option :value="item.url" v-for="item in rtc" :key="item.url">
          {{ item.label }}
        </option>
      </select>
    </div> -->
      <div :class="$style.btn">
        <router-link v-if="room" :to="`/room/${room}`">进入房间</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      room: "",
    };
  },
  methods: {
    goRoom() {
      this.$router.push(`/room/${this.room}`);
    },
  },
};
</script>

<style lang="scss" module>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.warpper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 240px;
  height: 100px;
}
.btn {
  margin-top: 30px;
}
</style>
