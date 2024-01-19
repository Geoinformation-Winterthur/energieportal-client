import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule],
  templateUrl: './navigation.component.html',
  // template: `
  // <section>
  //   <form>
  //     <input type="text" placeholder="Filter by city" />
  //       <button class="primary" type="button">Search</button>
  //     </form>
  //   </section>
  // `,
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
