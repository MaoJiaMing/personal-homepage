import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8081, // 固定端口，和主应用配置一致
    cors: true, // 允许跨域，必须开启
    origin: 'http://localhost:8081',
  },
  // 关键：Vite项目必须配置这个，否则qiankun无法识别子应用
  build: {
    rollupOptions: {
      output: {
        format: 'umd', // 打包格式为umd，qiankun要求
        name: 'vue3-sub', // 和主应用配置的name一致
        globals: { vue: 'Vue' },
      },
    },
  },
})
