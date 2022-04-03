import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'

const app = createApp(App)
/* 引入element-plus */
installElementPlus(app)
// 服务器前缀url
const baseURL = 'http://localhost:3000' 

/* 配置全局axios */
axios.defaults.baseURL = "http://localhost:3000"//配置前缀url

axios.defaults.withCredentials =true //携带cookie
app.config.globalProperties.$axios = axios //为全局Vue实例添加一个属性

app.use(store).use(router).mixin({
    data(){
        return {baseURL}
    }
}).mount('#app')