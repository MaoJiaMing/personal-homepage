// src/app/home/home.ts - 生产级标准业务首页组件
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home', // 业务组件，非根组件
  standalone: true, // 独立组件，Angular14+标准
  templateUrl: './home.html',
 
})
export class HomeComponent {
  // 你的业务首页内容，就是原来写在App组件里的内容
  protected readonly title = signal('homepage-angular');
  runMode = window.__POWERED_BY_QIANKUN__ ? '✅ 被qiankun主应用加载' : '🟢 Angular独立运行';
}