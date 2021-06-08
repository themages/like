<template>
  <div id="nav" :class="$style.nav">
    <!-- <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>
<script>
// 外部模块
// 1. npm 2.组件 3. 类方法
// 内部模块
// 1. 组件 2. vuex vue指令 3. 类方法 工具函数
export default {
  name: "App",
  data() {
    return {};
  },
  created() {},
};
</script>
<style lang="scss" module>
.nav {
  width: 100vw;
  height: 100vh;
}
</style>
