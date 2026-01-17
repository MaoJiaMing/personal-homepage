import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app: any = null // 保存Vue实例，用于卸载

/**
 * 封装创建实例的方法
 * @param {*} container 挂载容器，qiankun会传递过来
 */
function render(container: HTMLElement | null = null) {
  app = createApp(App)
  app.use(router)
  // 挂载到容器里：如果是独立运行则挂载到#app，qiankun加载则挂载到传递的容器
  app.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时（本地开发），直接渲染
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

// 核心：导出qiankun要求的生命周期钩子，必须暴露到window上
export async function bootstrap() {
  console.log('Vue3子应用：初始化完成')
}
export async function mount(props: any) {
  console.log('Vue3子应用：挂载成功，接收主应用参数', props)
  render(props.container) // 挂载到qiankun传递的容器
}
export async function unmount() {
  console.log('Vue3子应用：卸载成功')
  app.unmount() // 销毁Vue实例，避免内存泄漏
  app = null
}
