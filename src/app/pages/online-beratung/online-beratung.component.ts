import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-online-beratung',
  standalone: true,
  imports: [CommonModule, IntroComponent],
  templateUrl: './online-beratung.component.html',
  styleUrl: './online-beratung.component.scss'
})
export class OnlineBeratungComponent {

}
