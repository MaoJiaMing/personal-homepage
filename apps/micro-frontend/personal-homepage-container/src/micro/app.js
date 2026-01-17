// 所有子应用的注册配置列表
export const microApps = [
  {
    name: 'vue3-sub', // 子应用唯一标识【必须唯一】，自定义
    entry: '//localhost:8081', // 子应用运行的本地地址+端口，记好后续配置
    container: '#micro-container', // 子应用要挂载到主应用的哪个DOM节点
    activeRule: '/vue3-sub', // 路由匹配规则：主应用路由到该路径时加载子应用
    props: { // 主应用向子应用传递的参数，可选
      msg: '我是主应用传给Vue3子应用的参数'
    }
  },
  {
    name: 'nextjs-sub',
    entry: '//localhost:8082',
    container: '#micro-container',
    activeRule: '/nextjs-sub',
    props: { 
      msg: '我是主应用传给NextJS子应用的参数' }
  },
  {
    name: 'angular-sub',
    entry: '//localhost:8083',
    container: '#micro-container',
    activeRule: '/angular-sub',
    props: { 
      msg: '我是主应用传给Angular子应用的参数' }
  }
]

// 全局生命周期钩子：可选，按需配置
export const lifeCycles = {
  beforeLoad: [app => console.log('开始加载子应用：', app.name)],
  mounted: [app => console.log('子应用挂载完成：', app.name)],
  unmounted: [app => console.log('子应用卸载完成：', app.name)]
}