// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. ✅ 必配：关闭严格模式，解决qiankun挂载时React组件重复渲染导致的生命周期执行两次问题
  reactStrictMode: false,
  // 2. ✅ 必配：开启跨域，主应用加载Next.js子应用必须开跨域，否则请求资源报错
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
  // 3. ✅ 必配：配置基础路径，和子应用名称一致，解决资源路径错误
  basePath: process.env.NODE_ENV === "production" ? "/nextjs-qiankun-sub" : "",
  // 4. ✅ 可选：打包优化，开启静态导出，兼容qiankun的沙箱加载
  output: "standalone",
  // 5. ✅ 必配：关闭trailingSlash，避免路由跳转异常
  trailingSlash: false,

};

export default nextConfig;