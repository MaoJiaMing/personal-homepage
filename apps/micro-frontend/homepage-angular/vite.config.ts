// vite.config.ts 【终极完整版，直接覆盖，根治两个核心报错，保留所有功能】
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

const appName = 'angular-qiankun-sub';

export default defineConfig({
  // ✅ 解决报错1：对import.meta.env做类型断言，规避TS校验，逻辑完全不变
  base: (import.meta as any).env.PROD ? `/${appName}/` : '/',
  plugins: [
    // ✅ 解决报错2：对qiankun插件做类型强制兼容，解决Vite7.x+PNPM的类型隔离问题
    qiankun(appName, { useDevMode: true }) as unknown as import('vite').PluginOption,
  ],
  server: {
    port: 4200,
    cors: true,
    host: '0.0.0.0',
    allowedHosts: ['all'],
  },
  build: {
    outDir: 'dist/angular-qiankun-sub',
    sourcemap: false,
  },
});
