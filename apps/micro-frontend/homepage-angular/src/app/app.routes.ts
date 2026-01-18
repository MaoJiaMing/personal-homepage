// src/app/app.routes.ts - 生产级标准路由配置，无任何报错，完全合规
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; // 导入业务首页组件

// 保留qiankun的路由基准路径适配（生产必配，解决微前端路由前缀问题）
const routerBase = window.__POWERED_BY_QIANKUN__ ? '/angular-qiankun-sub/' : './';

// ✅ 生产级合规路由规则：根路径渲染业务首页组件
export const routes: Routes = [{ path: '', pathMatch: 'full', component: HomeComponent }];

export const appRoutes = {
  routes: routes,
  baseHref: routerBase,
};
