<template>
  <div id="Login">
    <Title />
    <div class="loginBox" @click="closeLoginBox">
      <div class="main" @click.stop>
        <el-form
          :model="loginForm"
          status-icon
          ref="loginForm"
          :rules="rules"
          @keydown.enter="loginSubmit"
        >
          <el-form-item prop="user" label-width="0">
            <el-input
              v-model="loginForm.user"
              placeholder="enter one user name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass" label-width="0">
            <el-input
              type="password"
              v-model="loginForm.pass"
              placeholder="Please input a password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginSubmit()">Login</el-button>
            <a href="/register">No password? Click me to register</a>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
  },
  data() {
    return {
      //登陆表单数据
      loginForm: {
        user: "",
        pass: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名" },
          {
            validator(rule, value, cb) {
              //长度检验
              if (value.length < 2 || value.length > 8) {
                cb(new Error("请输入2~8位的用户名"));
              }
              //规则验证
              if (
                !/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]+$/.test(value)
              ) {
                cb(new Error("只允许字母、数字、_、中/日/韩文"));
              }
              cb();
            },
          },
        ],
        pass: [
          { required: true, message: "请输入密码" },
          {
            validator(rule, value, cb) {
              //长度验证
              if (value.length < 6 || value.length > 18) {
                cb(new Error("请输入6~18位的密码"));
              }
              //规则验证
              if (!/^[\w!\[\]{}\/\\:"|?>·`<@#$%^&*\(\)_+=~\-]+$/.test(value)) {
                cb(new Error("请输入合法的英文字符"));
              }
              cb();
            },
          },
        ],
        pass2: [
          { required: true, message: "请确认密码" },
          {
            validator: (rule, value, cb) => {
              if (this.regForm.pass !== value) {
                cb(new Error("两次输入密码不一致"));
              }
              cb();
            },
          },
        ],
      },
    };
  },
  methods: {
    // 登陆提交
    loginSubmit() {
      this.$refs["loginForm"].validate(async (v) => {
        if (v) {
          //console.log(666);
          let { data } = await this.$axios({
            method: "POST",
            url: "/login",
            data: this.loginForm,
          });
          console.log(data);
          //登陆失败
          if (data.code) {
            // console.log(1111);
            this.$message.error(data.msg);
            return;
          }
          //登陆成功
          this.$message.success("登陆成功"); //成功提示
          this.$refs.loginForm.resetFields(); // 清空表单数据
          /* 跳转到主页 */
          this.$router.push("/")
          //存到vuex
          this.loginSuccess(data.data);
        } else {
          return false;
        }
      });
    },
    //vuex
    ...mapMutations(["loginSuccess"]),
  },
};
</script>

<style lang="less">
#Login {
  width: 100%;
  .loginBox {
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    .main {
      width: 450px;
      padding: 10px 20px;
      margin: 0 auto;
      background: #fff;
      input {
        outline: none;
        border: none;
        font-size: 14px;
        padding: 5px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        background: transparent;
        margin: 20px 0;
      }
      button {
        border-radius: 4px;
        color: #ffffff;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        background-color: rgba(0,0,0,.05);
        border: 0;
        color: #34495e;
        font-weight: 400;
        transition: 0.3s;
        padding: 0px 20px;
      }
      .el-form-item__content{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }
    }
  }
}
</style>