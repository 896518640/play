<template>
  <div id="Register">
    <Title />
    <div class="loginBox" @click="closeLoginBox">
      <div class="main" @click.stop>
        <el-form
          :model="regForm"
          status-icon
          ref="regForm"
          :rules="rules"
          @keydown.enter="regSubmit"
        >
          <el-form-item  prop="user">
            <el-input v-model="regForm.user" placeholder="Please enter your user name"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input type="password" v-model="regForm.pass" placeholder="Please enter your password"></el-input>
          </el-form-item>
          <el-form-item  prop="pass2">
            <el-input type="password" v-model="regForm.pass2" placeholder="Please enter your password again"> </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="regSubmit('regForm')"
              >Register now</el-button
            >
            <a href="/login">Existing account? Click me to log in</a>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
  },
  data() {
    return {
      //注册表单数据
      regForm: {
        user: "",
        pass: "",
        pass2: "",
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
    // 注册提交
    regSubmit(regForm) {
      this.$refs[regForm].validate(async (v) => {
        console.log(111);
        if (v) {
          let { data } = await this.$axios({
            method: "POST",
            url: "/reg",
            data: {
              user: this.regForm.user,
              pass: this.regForm.pass,
            },
          });
          //注册失败
          if (data.code) {
            this.$message.error(data.msg);
            return;
          }
          //注册成功
          this.$message.success("注册成功，即将为您切换到登录");
          //清空表单数据
          this.$refs.regForm.resetFields();
          //切换到登陆页面
          this.$router.push("/login");
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less">
#Register {
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