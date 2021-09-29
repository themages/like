<template>
  <div>
    {{ userToken }}
    <div>
      <div>如果登陆用户被占用或被挤掉下线，可以尝试选择其他</div>
      <select name="摄像头" v-model="userToken" @change="changeCamera">
        <template v-for="user in token" :key="user.userId">
          <option :value="user">
            {{ user.userId }}
          </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RoomEnter",
  data() {
    return {
      userToken: null,
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      token: "token",
    }),
  },
  methods: {
    changeCamera() {
      console.log("选择了用户名和签名");
    },
  },
};
</script>

<style lang="scss" scoped></style>
