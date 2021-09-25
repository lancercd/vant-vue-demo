<template>
  <div>
    <navbar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
    />
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"

          :rules="userFormRules.username"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="userFormRules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
import { login } from "@/api/auth";
import Navbar from "@/components/main/navbar/NavBar";

function func(user) {
  const store = useStore();
  function onSubmit () {
    Toast.loading({
      message:"登录中...",
      forbidClick: true
    });

    login(user).then(data => {
      store.commit("setUser", data.data);
      Toast.success(data.msg);
    }, err => {
      Toast.fail(err.msg);
    })
  }

  const userFormRules = {
    username: [{required: true, message: "请输入用户名!"}],
    password: [
      {required: true, message: "请输入密码!"},
      {pattern: /^\d{3,16}$/, message: "密码为3-16位!"}
    ]
  }
  return {
    onSubmit,
    userFormRules
  }
}

export default {
  name: "Login",
  setup() {
    const user = reactive({
      username: "",
      password: ""
    });


    return {
      ...toRefs(user),
      ...func(user)
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
