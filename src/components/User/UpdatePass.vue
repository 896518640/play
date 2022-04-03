<template>
  <div class="UpdatePass">
    <el-form
      ref="passForm"
      :model="passForm"
      :rules="rules"
      status-icon
      label-width="120px"
    >
      <el-form-item label="Old password:" prop="pass">
        <el-input type="password" v-model="passForm.oldPass"></el-input>
      </el-form-item>
      <el-form-item label="New password:" prop="pass">
        <el-input type="password" v-model="passForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="Confirm:" prop="pass2">
        <el-input type="password" v-model="passForm.pass2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('passForm')" plain
          >Confirm</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      passForm: {
        oldPass: "",
        pass: "",
        pass2: "",
      },
      rules: {
        pass: [
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
          {
            validator: (rule, value, cb) => {
              if (this.passForm.pass !== value) {
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
      ...mapMutations(['loginOut']),
    submit() {
        this.$refs.passForm.validate(async v=>{
            if(v){
                let {data} = await this.$axios({
                    method:"POST",
                    url:"/personal/pass",
                    data:{
                        oldPass:this.passForm.oldPass,
                        pass:this.passForm.pass
                    }
                })
                //修改成功
                if(data.code){
                    return this.$message.error(data.msg)
                }
                //修改成功
                this.$message.success("密码修改成功,请重新登录")//提示
                this.$refs["passForm"].resetFields()//清空表单
                this.loginOut()//vuex清理
                this.$router.push("/")//回到首页
            }else{
                return false
            }
        })
    },
  },
};
</script>

<style>
</style>