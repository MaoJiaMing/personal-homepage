import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homepage-angular');
  runMode = window.__POWERED_BY_QIANKUN__ ? '✅ 被qiankun主应用加载' : '🟢 Angular独立运行';
}
