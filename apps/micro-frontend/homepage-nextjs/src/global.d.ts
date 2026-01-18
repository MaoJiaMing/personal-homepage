// src/global.d.ts
declare global {
  let __webpack_public_path__: string;
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
    bootstrap?: () => Promise<void>;
    mount?: (props: any) => Promise<void>;
    unmount?: (props: any) => Promise<void>;
  }
}
export {};