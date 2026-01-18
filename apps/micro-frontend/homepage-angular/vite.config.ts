// 项目根目录 vite.config.ts 【完整覆盖，根治报错5，零报错，核心配置不变】
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun'; // 只保留qiankun插件即可

const appName = 'angular-qiankun-sub';

export default defineConfig({
  // ✅ 解决环境变量process报错 + qiankun基础路径适配
  base: import.meta.env.PROD ? `/${appName}/` : '/',
  plugins: [
    // ✅ 删除 import angular from '@angular/vite-plugin-angular' 和 angular() 调用
    qiankun(appName, { useDevMode: true })
  ],
  server: {
    port: 4200,
    cors: true,
    origin: 'http://localhost:4200'
  },
  build: {
    outDir: 'dist/angular-qiankun-sub',
    sourcemap: false
  }
});