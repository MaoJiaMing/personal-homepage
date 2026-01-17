/** @type {import('next').NextConfig} */
const nextConfig = {
  // 核心：允许所有跨域请求，主应用加载子应用的核心配置
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "*" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
  // 关闭严格模式，解决qiankun和react严格模式的兼容问题
  reactStrictMode: false,
  // 关闭trailingSlash，避免路由后缀/的问题
  trailingSlash: false,
};

module.exports = nextConfig;
