<template>
  <div id="UpdatePhoto">
      <el-alert
      title="Upload Avatar"
      description="Click the + sign below to update the avatar"
      type="warning"
      :closable='false'
      show-icon>    
      </el-alert>
    <el-upload
      class="avatar-uploader"
      :with-credentials="true"
      :action="baseURL+'/personal/photo'"
      :show-file-list="false"

      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon "></i>
    </el-upload>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    ...mapMutations(['loginSuccess']),
    handleAvatarSuccess(res, file) {
        /* 上传头像ui组件默认发送请求不携带cookie 所以请求发送到后台之后
            由于请求并未携带cookie 所以后台会认为其并未登录 所以会被鉴权
            路由拦截 发送给前端的信息为用户未登录
        */
       if(res.code){
           return this.$message.error("上传失败，请稍后再试")
       }
        //显示缩略图
        this.imageUrl = URL.createObjectURL(file.raw)
        //更新vuex
        this.loginSuccess(res.data)
    },
    beforeAvatarUpload(file) {
      console.log(file);
      //console.log("this.imageUrl",this.imageUrl);
      const isJPG = /^image\/(jpeg|png)$/.test(file.type);
      const isLt2M = file.size / 1024 / 1024 < 0.5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能为JPG|PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 500KB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="less" scoped>
#UpdatePhoto {
  /deep/.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    .avatar{
        display: block;
        max-width: 178px;
        max-height: 178px;
    }
    .avatar-uploader-icon{
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
  }
}
</style>