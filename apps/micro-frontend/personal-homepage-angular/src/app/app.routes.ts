import { Routes } from '@angular/router';
// 你的独立组件（示例是根组件）
import { App } from './app';

export const routes: Routes = [{ path: '', component: App, pathMatch: 'full' }];

// 新增：路由配置对象（Angular 22 推荐写法）
export const appRoutes = {
  routes,
  useHash: true // 核心：开启 Hash 路由
};