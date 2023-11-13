import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-view/user-home/user-home.component';
import { RegisterActivityComponent } from './user-view/register-activity/register-activity.component';
import { LoginComponent } from './user-view/login/login.component';
import { NewAccountComponent } from './user-view/new-account/new-account.component';
import { AthleteListComponent } from './user-view/athlete-list/athlete-list.component';
import { InscriptionsComponent } from './user-view/inscriptions/inscriptions.component';
import { ContactComponent } from './user-view/contact/contact.component';
import { StravLoginComponent } from './stravia-view/strav-login/strav-login.component';
import { ManageRaceComponent } from './stravia-view/manage-race/manage-race.component';
import { StravHomeComponent } from './stravia-view/strav-home/strav-home.component';

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
  },
  {
    path: 'app-inscriptions',
    component: InscriptionsComponent,
    title: 'Inscripciones'
  },
  {
    path: 'app-contact',
    component: ContactComponent,
    title: 'Contacto'
  },
  {
    path: 'app-strav-home',
    component: StravHomeComponent,
    title: 'Inicio Admin'
  },
  {
    path: 'app-manage-race',
    component: ManageRaceComponent,
    title: 'Administrar carreras'
  },
  {
    path: 'app-strav-login',
    component: StravLoginComponent,
    title: 'Sesion Admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
