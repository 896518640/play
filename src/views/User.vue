<template>
  <div id="User">
    <Title />
    <div class="layout">
      <article>
        <h2>Modify user name</h2>
        <UpdateName />
      </article>
      <article>
        <h2>Change Password</h2>
        <UpdatePass />
      </article>
      <article>
        <h2>Upload Avatar</h2>
        <UpdatePhoto />
      </article>
      <article class="loginout">
        <h2 class="el-button" @click="logout">Log Out</h2>
      </article>
    </div>
  </div>
</template>

<script>
import UpdateName from "@/components/User/UpdateName";
import UpdatePass from "@/components/User/UpdatePass";
import UpdatePhoto from "@/components/User/UpdatePhoto";
import { mapState, mapMutations } from "vuex";
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
    UpdateName,
    UpdatePass,
    UpdatePhoto,
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  watch: {
    userInfo() {
      this.backHome();
    },
  },
  methods: {
    //未登录情况下，返回首页
    backHome() {
      if (!this.userInfo.user) {
        this.$message.error("当前未登录，无法修改个人信息,已自动返回首页");
        this.$router.replace("/");
      }
    },
    ...mapMutations(["loginOut"]),
    //退出登录
    async logout() {
      //前端要清除vuex 后端清除session
      let { data } = await this.$axios({
        method: "POST",
        url: "/login/out",
      });
      if (data.code) return;

      //退出成功
      //清空vuex
      this.loginOut();
      this.$message.success("已退出登录");
    },
  },
  beforeRouteEnter(to, from, next) {
    //前置导航没有this 获取组件实例可通过next参数
    next((vm) => {
      vm.backHome();
    });
  },
};
</script>
<style lang="less" scoped>
#User {
  width: 100%;
  .layout {
    max-width: 1200px;
    margin: 0 auto;
    article {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 15px;
      box-shadow: 0 0 4px #ddd;
      padding: 25px 20px;
      background-color: #fff;
      font-family: Quicksand, Microsoft YaHei, sans-serif;
      h2 {
        margin-bottom: 15px;
        font-size: 20px;
        letter-spacing: 3px;
        line-height: 24px;
        text-indent: 10px;
        border-bottom: 1px dashed #eee;
        padding-bottom: 30px;
        margin-bottom: 30px;
      }
    }
    .loginout {
      text-align: center;
      h2{
        padding: 10px;
      }
    }
  }
}
</style>