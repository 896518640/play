<template>
  <div class="UpdateName">
    <el-form
         ref="userForm"
        :model="userForm" 
        :rules="rules" 
        status-icon
        label-width="120px"
      >
    <el-form-item label="Current user name:" >
      <span class="code">
          {{userInfo.user}}
        </span> 
    </el-form-item>
    <el-form-item label="New user name:" prop="user">
      <el-input v-model="userForm.user"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"  @click="submit('userForm')" plain>Confirm</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      userForm: {
        user: "",
      },
      rules:{
           user:[
              {
                  validator:(rule,value,cb)=>{
                      //长度检验
                      if(value.length<2 || value.length>8){
                          cb(new Error("请输入2~8位的用户名"))
                      }
                      //规则验证
                      if(!/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]+$/.test(value)){
                          cb(new Error("只允许字母、数字、_、中/日/韩文"))
                      }
                      //不能和原来的一样
                      if(value === this.userInfo.user){
                          cb(new Error("用户名没有变化😒"))
                      }
                      cb()
                  }
              }
          ],
      }
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
      ...mapMutations(['loginSuccess']),
      submit(){
          this.$refs['userForm'].validate(async v=>{
              if(v){
                  let {data} = await this.$axios({
                      method:"POST",
                      url:"/personal/user",
                      data:{
                          user:this.userForm.user
                      }
                  })
                  //修改失败
                  if(data.code){
                      return this.$message.error(data.msg)
                  }
                  //修改成功
                  this.$message.success("用户名修改成功")//提示
                  this.loginSuccess(data.data)//vuex更新
                  this.$refs['userForm'].resetFields()//表单重置
              }else{
                  return false
              }
          })
      }
  },
};
</script>

<style lang="less" scoped>
.UpdateName{
    font-family: Quicksand;
  span.code{
      color: #bd4147;
      background-color: rgba(27,31,35,.05);
      font-weight: 700;
  }
}

</style>