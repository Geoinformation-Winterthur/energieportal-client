import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, NavigationComponent, IntroComponent]
})
export class AppComponent {
  title = 'energieportal-client';
}
