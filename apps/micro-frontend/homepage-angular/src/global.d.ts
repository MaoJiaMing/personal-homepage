// src/typings/global.d.ts 【全局生效，根治所有window相关TS报错】
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
    bootstrap?: () => Promise<void>;
    mount?: (props: any) => Promise<void>;
    unmount?: (props: any) => Promise<void>;
  }
  // ✅ 声明process，防止万一有遗漏的process报错
  var process: { env: { NODE_ENV: string } };
}

export {};