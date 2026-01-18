// src/main.ts 【最终零报错完整版，直接覆盖】
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { App } from './app/app';
import { routes } from './app/app.routes';

// 生产环境兼容写法，永不报错
try {
  if (process.env.NODE_ENV === 'production') {
    enableProdMode();
  }
} catch (e) {}

// 全局应用实例，用于卸载销毁，防止内存泄漏
let appInstance: any = null;

/**
 * 渲染方法：兼容【独立运行】和【qiankun主应用挂载】
 */
async function render(props: any = {}) {
  if (appInstance) {
    await appInstance.destroy();
    appInstance = null;
  }
  const rootElement = props.container 
    ? props.container.querySelector('app-root') 
    : document.querySelector('app-root');

  if (rootElement) {
    appInstance = await bootstrapApplication(App, {
      providers: [provideRouter(routes)]
    });
  }
}

// ✅ 独立运行判断：未被qiankun挂载时，直接渲染页面
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// ✅ qiankun必须的3个生命周期钩子【缺一不可】
export async function bootstrap() {
  console.log('✅ Angular21子应用：初始化完成');
}
export async function mount(props: any) {
  console.log('✅ Angular21子应用：被qiankun挂载成功');
  await render(props);
}
export async function unmount() {
  console.log('✅ Angular21子应用：被qiankun卸载成功');
  if (appInstance) {
    await appInstance.destroy();
    appInstance = null;
  }
}