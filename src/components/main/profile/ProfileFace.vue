<template>
  <div class="profile-face">
    <van-image
        round
        width="2rem"
        height="2rem"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="info-box">
      <div class="username-box">
        <h4>lancercd</h4>
        <span class="lv-label">LV</span>
        <span class="lv-grade">4</span>
      </div>
      <div class="vip-info">
        正式会员
      </div>
      <div class="bin-info">
        <span style="margin-right: 10px;">B币: 0.0</span>
        <span>硬币: 933</span>
      </div>
    </div>
    <div class="room" @click="goToSpace">
      <span>空间</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
import Jumper from "@/router/Jumper";

export default {
  name: "ProfileFace",
  methods: {
    goToSpace() {
      Jumper.toSpace();
      // this.$router.push({path: "/space"})
    }
  }
}
</script>

<style lang="less" scoped>
.profile-face {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  padding: 5px 10px;

  .info-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding: 10px 0 10px 10px;

    .username-box {
      padding-bottom: 2px;

      h4 {
        margin: 0;
        display: inline;
        font-size: 22px;
        font-weight: 500;
        padding-right: 3px;
      }
      span {
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        background-color: #e74c3c;
      }
      .lv-label {
        font-size: 10px;
        padding-left: 2px;
      }
    }

    .vip-info {
      font-size: 10px;
      border-radius: 5px;
      border: 1px solid #fb7299;
      padding: 0 3px 1px;
      color: #fb7299;
      text-align: center;
    }
    .bin-info {
      padding: 5px 0;
      font-size: 10px;
      color: #7f8c8d
    }
  }

  .room {
    font-size: 14px;
    color: #95a5a6;

    span {
      margin-right: 3px;
    }
  }
}
</style>
