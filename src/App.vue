<template>
  <AppNav />
  <div id="main">
    <router-view></router-view>
  </div>
  <footer>© 2022 xxx ICP备 xxx 号 x 公网安备 xxx 号</footer>
</template>

<script>
import AppNav from "./components/AppNav.vue";
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    AppNav,
  },
  methods: {
    ...mapMutations(["loginSuccess"]),
  },
  async created() {
    let { data } = await this.$axios({
      method: "POST",
      url: "/login/check",
    });
    console.log(data);
    //未登录
    if (data.code) return;
    //已登陆
    this.loginSuccess(data.data);
  },
};
</script>

<style lang="less">
@import "assets/css/reset.css";
@import "assets/css/font.css";
@import "assets/css/font/iconfont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0;
  padding: 0;
  #main {
    width: 100%;
    min-height: 500px;
    box-sizing: border-box;
    font-family: Quicksand;
    /* padding: 0 15px; */
    display: flex;
    margin: 80px auto 0;
  }
  footer {
    width: 100%;
    height: 60px;
    background-color: #fff;
    color: #aaa;
    padding: 5px 0;
    text-align: center;
    margin-top: 50px;
    line-height: 60px;
    box-sizing: border-box;
  }
}
</style>
