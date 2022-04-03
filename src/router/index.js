import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path:"/",
    name:"Home",
    component:Home
  },
  {
    path:"/login",
    name:"Login",
    component:import('../views/Login.vue')
  },
  {
    path:"/register",
    name:"Register",
    component:import('../views/Register.vue')
  },
  {
    path:"/message",
    name:"Community",
    component:import('../views/Message.vue')
  },
  {
    path:"/show",
    name:"Products",
    component:import('../views/Show.vue')
  },
  {
    path:"/user",
    name:"User",
    component:import('../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
