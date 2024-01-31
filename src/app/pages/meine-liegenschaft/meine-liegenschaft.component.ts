import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-meine-liegenschaft',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './meine-liegenschaft.component.html',
  styleUrl: './meine-liegenschaft.component.scss'
})
export class MeineLiegenschaftComponent {

}
