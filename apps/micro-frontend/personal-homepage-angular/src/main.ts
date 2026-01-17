import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core'; // 只保留这个，删除 NgZone
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

// 生产环境开启性能优化，保留不变
if (environment.production) {
  enableProdMode();
}

// 核心变量：保存应用实例，防止内存泄漏，保留不变
let appInstance: any = null;
const appRootId = 'angular-root';

/**
 * 封装渲染方法：兼容【独立运行】和【qiankun微应用加载】双模式
 * 无任何冲突配置，完美匹配之前的挂载节点
 */
async function renderAngularApp(container?: HTMLElement) {
  const mountNode = container
    ? container.querySelector(`#${appRootId}`)
    : document.querySelector(`#${appRootId}`);

  if (mountNode) mountNode.innerHTML = ''; // 清空节点，防止重复挂载

  // ✅ 核心修改：删除手动NgZone配置，使用Angular原生Zone.js，解决NG0908冲突
  appInstance = await bootstrapApplication(App, {
    ...appConfig, // 只保留原生配置，无任何手动覆盖
  });

  // 标准挂载，保留不变
  if (appInstance && appInstance.rootNodes && appInstance.rootNodes.length > 0) {
    const rootDomNode = appInstance.rootNodes[0];
    mountNode?.appendChild(rootDomNode);
  }
}

// 独立运行判断，保留不变
if (!(typeof window !== 'undefined' && (window as any).__POWERED_BY_QIANKUN__)) {
  renderAngularApp().catch((err) => console.error('Angular启动失败:', err));
}

// ✅ 完整保留qiankun三大生命周期钩子，逻辑不变，接收主应用参数正常
export async function bootstrap() {
  console.log('✅ [Angular22子应用] 微应用初始化完成 (bootstrap)');
}

export async function mount(props: any) {
  console.log('✅ [Angular22子应用] 微应用挂载成功 (mount)，接收参数 →', props);
  await renderAngularApp(props.container);
}

export async function unmount() {
  console.log('✅ [Angular22子应用] 微应用卸载成功 (unmount)');
  // 完整销毁实例+清空节点，无内存泄漏，保留不变
  if (appInstance) {
    await appInstance.destroy();
    appInstance = null;
  }
  const mountNode = document.querySelector(`#${appRootId}`);
  if (mountNode) mountNode.innerHTML = '';
}