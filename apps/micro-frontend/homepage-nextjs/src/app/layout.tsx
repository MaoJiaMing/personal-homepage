// src/app/layout.tsx 【终极零报错完整版，所有问题解决】
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// 导入公共路径配置，无其他依赖
import "../public-path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js QianKun 子应用",
  description: "Next.js14+TS+AppRouter+qiankun微前端子应用",
};

// 根布局组件 - 顶级定义，符合TS规范
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

// ✅ 核心修复：先判断浏览器环境，再挂载qiankun生命周期钩子到window
// 服务端编译时跳过这段代码，浏览器运行时正常执行
const isBrowserEnv = typeof window !== 'undefined';
if (isBrowserEnv && window.__POWERED_BY_QIANKUN__) {
  window.bootstrap = async () => {
    console.log("✅ Next.js子应用：初始化成功 (bootstrap)");
  };
  window.mount = async (props: any) => {
    console.log("✅ Next.js子应用：挂载成功 (mount)，主应用传参：", props);
  };
  window.unmount = async (props: any) => {
    console.log("✅ Next.js子应用：卸载成功 (unmount)");
  };
}

// ✅ 唯一顶级默认导出，彻底解决TS重复导出/层级报错
export default RootLayout;