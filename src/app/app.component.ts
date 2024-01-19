import { Component } from '@angular/core';
import { environment } from './../environments/environment.development'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AccordeonComponent } from './components/accordeon/accordeon.component';
import { EmpfehlungsboxComponent } from './components/empfehlungsbox/empfehlungsbox.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoboxComponent } from './components/infobox/infobox.component';
import { InteraktiveGrafikComponent } from './components/interaktive-grafik/interaktive-grafik.component';
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