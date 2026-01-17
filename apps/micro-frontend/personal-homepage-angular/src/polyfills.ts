/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 */

// ✅ 【必加，核心修复NG0908】导入Zone.js，Angular22独立组件强制依赖，一行都不能少
import 'zone.js'; 

// 其他polyfill保留默认即可，不用删
(window as any).__Zone_enable_cross_context_check = true;