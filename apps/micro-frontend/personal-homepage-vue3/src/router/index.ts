import { createRouter, createWebHashHistory } from 'vue-router' // 改为 createWebHashHistory
import Home from '../views/HomeView.vue'

const routes = [{ path: '/', name: 'Home', component: Home }]

const router = createRouter({
  history: createWebHashHistory(), // hash路由，彻底避免主/子路由冲突
  routes,
})

export default router
