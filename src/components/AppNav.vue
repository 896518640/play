<template>
  <div id="AppNav">
    <div class="content">
      <!-- logo -->
      <div class="logo">
        <a href="/">Good Table Games</a>
      </div>
      <!-- sep -->
      <div class="sep"></div>
      <!-- nav -->
      <div class="nav">
        <a href="/">
          <span>
            <i></i>
            Home
          </span>
        </a>
        <a href="/show">
          <span>
            <i></i>
            Products
          </span>
        </a>
        <a href="/message">
          <span>
            <i></i>
            Community
          </span>
        </a>
      </div>
      <!-- 登录/注册 -->
      <div class="login">
        <input type="text" v-model="search" placeholder="Please enter the content to search" />
        <a class="login-button" href="/login" v-if="!userInfo.user"
          ><i></i> Login</a
        >
        <a href="/user" class="user-info" v-else>
          <img :src="`${baseURL}${userInfo.photo}`" alt="" />
          <span>{{userInfo.user}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      isLogin: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
<style lang="less" scoped>
#AppNav {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 30px rgb(0 0 0 / 7%);
  z-index: 999;
  .content {
    max-width: 1300px;
    min-width: 800px;
    /* justify-content: space-between; */
    box-sizing: border-box;
    display: flex;
    padding: 0 15px;
    margin: 0 auto;
    position: relative;
    .logo {
      width: 330px;
      height: 80px;
      font-size: 20px;
      line-height: 80px;
      a {
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        color: #34495e;
        font-family: Pacifico;
        letter-spacing: 5px;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      height: 80px;
      width: calc(100% - 416px);
      a {
        font-size: 14px;
        line-height: 81px;
        margin: 0 12px;
        transition: color 0.3s cubic-bezier(0.77, 0, 0.175, 1);
        display: block;
        font-weight: 700;
        letter-spacing: 0.2px;
        color: #34495e;
        text-decoration: none;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        padding: 0 10px;
      }
      a:hover {
        opacity: 0.8;
      }
    }
    .sep {
      display: flex;
      height: 80px;
      margin: 0 20px;
      width: 1px;
    }
    .sep::after {
      background-color: #e6e6e6;
      content: "";
      height: 50%;
      margin: auto;
      transition: background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1);
      width: 100%;
    }
    .login {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;
      .user-info {
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        height: 30px;
        justify-content: center;
        max-width: 100px;
        margin-right: 10px;
        border: 0;
        color: #34495e;
        img {
          align-items: center;
          border-radius: 30px;
          cursor: pointer;
          display: flex;
          font-size: 14px;
          height: 30px;
          justify-content: center;
          margin-right: 5px;
          border: 2px solid #eee;
          width: 30px;
        }
        span {
          -webkit-line-clamp: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .login-button {
        align-items: center;
        border-radius: 4px;
        color: #ffffff;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        height: 30px;
        justify-content: center;
        width: 80px;
        margin-right: 10px;
        background-color: #f6f6f6;
        border: 0;
        color: #34495e;
        font-weight: 400;
        transition: 0.3s;
        padding: 0 10px;
      }
      .login-button:hover {
        opacity: 0.7;
      }
      .login-button::after {
        opacity: 0.7;
      }
      input {
        border: 1px solid #ddd;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
        color: #000;
        width: 200px;
        outline: none;
        text-align: center;
        font-size: 12px;
        margin-left: 20px;
        margin-right: 50px;
      }
    }
  }
}
</style>