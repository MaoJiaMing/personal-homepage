// src/app/app.routes.ts 【最终完整版，直接覆盖，完美满足需求】
import { Routes } from '@angular/router';
// ✅ 导入根组件 App (对应 src/app/app.ts)
import { App } from './app';

// ✅ 保留qiankun路由基准路径适配，不变
const routerBase = window.__POWERED_BY_QIANKUN__ ? '/angular-qiankun-sub/' : './';

// ✅ ✅ ✅ 核心实现：默认路由(path: '') 直接渲染 app.ts 的根组件 App
// 完全符合Angular路由规则，根治 NG04014 报错，完美满足你的需求
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: App }
];

export const appRoutes = {
  routes: routes,
  baseHref: routerBase
};