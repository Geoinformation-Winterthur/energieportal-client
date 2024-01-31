import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeineLiegenschaftComponent } from './pages/meine-liegenschaft/meine-liegenschaft.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';

const routes: Routes = [
    {path: 'meine-liegenschaft', component: MeineLiegenschaftComponent},
    {path: 'ueber-uns', component: UeberUnsComponent},
    {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }