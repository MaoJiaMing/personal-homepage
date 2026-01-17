import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  host: {
    id: 'angular-root',
  },
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'personal-homepage-angular';
}
