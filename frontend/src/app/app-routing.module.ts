import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-view/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    title: 'Inicio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
