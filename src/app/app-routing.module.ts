import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ADZResultPageComponent } from './ADZresult-page/ADZresult-page.component';
import { ADZInputBarComponent } from './ADZinput-bar/ADZinput-bar.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ADZInputBarComponent },
  {path:'result',component: ADZResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
