import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 8080, // 主应用固定端口，建议8080，记住这个端口
    cors: true, // 允许所有跨域请求，必须开启！！！
    origin: 'http://localhost:8080'
  },
   optimizeDeps: {
    include: ['**/*.vue']
  }
})
