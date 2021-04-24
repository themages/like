<template>
  <div id="nav" :class="$style.nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss" module>
.nav {
  padding: 30px;
}
</style>
