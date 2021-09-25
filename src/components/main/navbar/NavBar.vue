<template>
  <van-nav-bar id="navbar">
    <slot></slot>
  </van-nav-bar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#navbar {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
}
</style>
