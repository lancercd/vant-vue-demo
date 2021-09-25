<template>
  <div id="profile">
    <navbar
        title="我的"
        left-text="返回"
        left-arrow
        @click-left="this.$router.back()"
    />
    <profile-face />
    <profile-relation />
    <div class="panel">
      <h4>推荐服务</h4>
      <van-grid :column-num="4" square>
        <van-grid-item icon-color="#fb7299" icon="photo-o" text="文字" />
        <van-grid-item icon-color="#fb7299" icon="photo-o" text="文字" />
        <van-grid-item icon-color="#fb7299" icon="photo-o" text="文字" />
        <van-grid-item icon-color="#fb7299" icon="photo-o" text="文字" />
        <van-grid-item icon-color="#fb7299" icon="photo-o" text="文字" />
        <van-grid-item icon-color="#fb7299" icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="panel">
      <h4>更多服务</h4>
      <van-cell title="联系客服" icon="like-o" is-link to="/" />
      <van-cell title="课堂模式" icon="star-o" is-link to="/" />
      <van-cell title="青少年模式" icon="fire-o" is-link to="/" />
      <van-cell title="设置" icon="setting-o" is-link to="/" />
    </div>
    <div class="logout">
      <van-button plain color="#fb7299" class="logout-btn" @click="onLogout">退出</van-button>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/main/navbar/NavBar"
import ProfileFace from "@/components/main/profile/ProfileFace";
import ProfileRelation from "@/components/main/profile/ProfileRelation";
import {Dialog} from "vant";

function useLogout(){
  const onLogout = () => {
    Dialog.confirm({title: "确定退出吗?"})
      .then(() => {
        console.log("确认退出!");
      }).catch(() => {
        console.log("取消");
      })
  }
  return {
    onLogout
  }
}

export default {
  name: "Profile",
  setup() {

    return {
      ...useLogout()
    }
  },
  components: {
    Navbar,
    ProfileFace,
    ProfileRelation
  }
}
</script>

<style lang="less" scoped>
#profile {
  height: 100vh;
  margin-top: 46px;
  padding-bottom: 60px;
}

.panel {
  h4 {
    margin: 10px 0 10px 10px;
    font-size: 16px;
    font-weight: 500;
  }
}

.icon-red {
  color: #e74c3c;
}

.logout {
  display: flex;
  justify-content: center;
  margin: 10px 0;

  .logout-btn {
    width: 50%;
    font-size: 16px;
  }
}
</style>
