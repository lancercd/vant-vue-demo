<template>
  <div>
    <router-view></router-view>
    <Tabbar :active="active" />
  </div>
</template>

<script>

import Tabbar from "@/components/main/tabbar/Tabbar";


export default {
  name: "Index",
  data() {
    return {
      active: 0
    };
  },
  components: {
    Tabbar
  }
}
</script>

<style scoped>

</style>
