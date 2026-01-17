import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 核心：给3个子应用配置路由占位，path和上面activeRule一一对应
  {
    path: '/vue3-sub',
    name: 'Vue3Sub',
    component: () => import('../views/MicroView.vue')
  },
  {
    path: '/nextjs-sub',
    name: 'NextJSSub',
    component: () => import('../views/MicroView.vue')
  },
  {
    path: '/angular-sub',
    name: 'AngularSub',
    component: () => import('../views/MicroView.vue')
  }
] as any;

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router