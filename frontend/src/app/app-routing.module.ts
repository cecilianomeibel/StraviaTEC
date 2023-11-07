import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-view/user-home/user-home.component';
import { RegisterActivityComponent } from './user-view/register-activity/register-activity.component';
import { LoginComponent } from './user-view/login/login.component';
import { NewAccountComponent } from './user-view/new-account/new-account.component';
import { AthleteListComponent } from './user-view/athlete-list/athlete-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    title: 'Inicio',
  },
  {
    path: 'app-register-activity',
    component: RegisterActivityComponent,
    title: 'Registrar actividad'
  },
  {
    path: 'app-login',
    component: LoginComponent,
    title: 'Cuenta Inicio'
  },
  {
    path: 'app-new-account',
    component: NewAccountComponent,
    title: 'Nueva sesion',
  },
  {
    path: 'app-athlete-list',
    component: AthleteListComponent,
    title: 'Lista Atletas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
