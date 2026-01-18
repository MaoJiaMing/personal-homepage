import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入qiankun的vite适配插件
import qiankun from 'vite-plugin-qiankun'

// ✅ 子应用唯一标识【必须记住】，主应用注册时的name必须和这个值完全一致！！！
const appName = 'vue3-qiankun-sub'

export default defineConfig({
  // 1. 基础路径配置：开发环境为/，生产环境配置为 /子应用名称/ 防止资源路径错误
  base: process.env.NODE_ENV === 'production' ? `/${appName}/` : '/',
  plugins: [
    vue(),
    // 2. 配置qiankun插件核心，开启子应用适配
    qiankun(appName, {
      useDevMode: true // 开发环境开启，生产环境自动关闭，无需改动
    })
  ],
  // 3. 开发服务器配置【必配】，解决跨域+固定端口+防止加载异常
  server: {
    port: 5173, // 固定子应用端口，主应用加载时要用这个端口，建议不要改
    cors: true, // 主应用加载子应用，必须开启跨域，否则直接报错
    origin: 'http://localhost:5173' // 声明子应用运行地址，防止qiankun加载失败
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})