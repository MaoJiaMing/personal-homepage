// src/router/index.js 补充后的完整版
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const appName = 'vue3-qiankun-sub'

export function createMicroRouter() {
  const routerBase = (window as any).__POWERED_BY_QIANKUN__ ? `/${appName}/` : '/'
  const router = createRouter({
    history: createWebHistory(routerBase),
    routes: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
    ]
  })

  // ✅ 新增：路由守卫，防止路由跳转报错
  router.beforeEach((to, from, next) => {
    if ((window as any).__POWERED_BY_QIANKUN__) {
      // 被主应用加载时，正常放行
      next()
    } else {
      next()
    }
  })

  return router
}