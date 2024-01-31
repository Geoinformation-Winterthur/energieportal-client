import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsHeizungComponent } from '../tabs-heizung/tabs-heizung.component';
import { TabsSanierungComponent } from '../tabs-sanierung/tabs-sanierung.component';
import { TabsSolaranlageComponent } from '../tabs-solaranlage/tabs-solaranlage.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabsHeizungComponent, TabsSanierungComponent, TabsSolaranlageComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})

export class TabsComponent {

}
