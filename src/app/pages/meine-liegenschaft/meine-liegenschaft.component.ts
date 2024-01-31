import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { TabComponent } from '../../components/tab/tab.component';

@Component({
  selector: 'app-meine-liegenschaft',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './meine-liegenschaft.component.html',
  styleUrl: './meine-liegenschaft.component.scss'
})
export class MeineLiegenschaftComponent {

}
