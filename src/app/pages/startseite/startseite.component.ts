import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [CommonModule, NavigationComponent, IntroComponent],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {

}
