// src/main.ts (TS项目专用)
import { createApp } from 'vue'
import App from './App.vue'
import type { App as VueApp } from 'vue'
import type { Router } from 'vue-router'
import { createMicroRouter } from './router'

let appInstance: VueApp | null = null
let routerInstance: Router | null = null

function render(props: any = {}) {
  const container = props.container ? (props.container as HTMLElement).querySelector('#app') : document.querySelector('#app')
  routerInstance = createMicroRouter()
  appInstance = createApp(App)
  appInstance.use(routerInstance)
  appInstance.mount(container!)
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('✅ vue3子应用：初始化完成(bootstrap)')
}

export async function mount(props: any) {
  console.log('✅ vue3子应用：挂载成功(mount)')
  render(props)
}

export async function unmount() {
  console.log('✅ vue3子应用：卸载成功(unmount)')
  if (routerInstance) routerInstance = null
  if (appInstance) {
    appInstance.unmount()
    appInstance = null
  }
}