import { Routes } from '@angular/router';
import { MeineLiegenschaftComponent } from './pages/meine-liegenschaft/meine-liegenschaft.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';

export const routes: Routes = [
    {path: 'meine-liegenschaft', component: MeineLiegenschaftComponent},
    {path: 'ueber-uns', component: UeberUnsComponent},
    {path: 'kontakt', component: KontaktComponent}
];
