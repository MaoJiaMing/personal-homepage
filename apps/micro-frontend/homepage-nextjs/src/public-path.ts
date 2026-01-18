// ✅ 核心修复：判断是否为【浏览器环境】再访问window对象
// typeof window !== 'undefined' 是判断浏览器环境的黄金标准，Next.js官方推荐
const isBrowserEnv = typeof window !== 'undefined';

// 动态设置webpack公共路径，服务端跳过，浏览器执行
if (isBrowserEnv && window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export {}; // TS模块规范必须加，防止全局变量污染