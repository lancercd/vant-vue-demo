<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o"  :to="index"   >首页</van-tabbar-item>
    <van-tabbar-item icon="search"  :to="qa"      >问答</van-tabbar-item>
    <van-tabbar-item icon="hot-o"   :to="video"   >标签</van-tabbar-item>
    <van-tabbar-item icon="contact" :to="profile" >我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import RouterPath from "@/router/RouterPath";

export default {
  name: "Tabbar",
  props: {
    active: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      index: RouterPath.INDEX,
      qa: RouterPath.QA,
      video: RouterPath.VIDEO,
      profile: RouterPath.PROFILE,
    }
  }
}
</script>
