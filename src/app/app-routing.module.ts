import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NextComponent } from './components/next.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'next',
    component: NextComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
