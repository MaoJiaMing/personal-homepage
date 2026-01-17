import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import router from './router'
// 导入qiankun核心API
import { registerMicroApps, start } from 'qiankun'
// 导入上面配置的子应用列表和生命周期
// @ts-ignore
import { microApps, lifeCycles } from './micro/apps'

const app = createApp(App)

app.use(router)
app.mount('#app')

// 核心：注册所有子应用
registerMicroApps(microApps, lifeCycles)

/**
 * 启动qiankun微前端服务
 * 配置项：{ sandbox: true } 开启沙箱隔离，默认就是true，解决样式、js变量冲突
 * 生产环境建议开启 strictStyleIsolation: true 严格样式隔离
 */
start({
  sandbox: {
    strictStyleIsolation: true // 强烈建议开启，解决主/子应用样式污染
  }
})