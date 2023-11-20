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
import { ManageChallengeComponent } from './stravia-view/manage-challenge/manage-challenge.component';
import { InscriptionsChallengeComponent } from './reusables/inscriptions-challenge/inscriptions-challenge.component';
import { InscriptionsRaceComponent } from './reusables/inscriptions-race/inscriptions-race.component';
import { JoinGroupComponent } from './user-view/join-group/join-group.component';
import { RegisteredRacesComponent } from './user-view/registered-races/registered-races.component';
import { RegisteredChallengesComponent } from './user-view/registered-challenges/registered-challenges.component';
import { CommentComponent } from './user-view/comment/comment.component';
import { ManageGroupComponent } from './stravia-view/manage-group/manage-group.component';
import { ParticipantsReportComponent } from './stravia-view/participants-report/participants-report.component';

const routes: Routes = [
  {
    path: 'app-user-home',
    component: UserHomeComponent,
    title: 'Inicio',
  },
  {
    path: 'app-comment',
    component: CommentComponent,
    title: 'Comentarios',
  },
  {
    path: 'app-register-activity',
    component: RegisterActivityComponent,
    title: 'Registrar actividad'
  },
  {
    path: '',
    component: LoginComponent,
    title: 'Cuenta Inicio'
  },
  {
    path: 'app-new-account',
    component: NewAccountComponent,
    title: 'Nueva sesion',
  },
  {
    path: 'app-join-group',
    component: JoinGroupComponent,
    title: 'Unirse a grupo',
  },
  {
    path: 'app-registered-races',
    component: RegisteredRacesComponent,
    title: 'Carreras registradas',
  },
  {
    path: 'app-registered-challenges',
    component: RegisteredChallengesComponent,
    title: 'Retos registradas',
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
    path: 'app-manage-challenge',
    component: ManageChallengeComponent,
    title: 'Administrar retos'
  },
  {
    path: 'app-manage-group',
    component: ManageGroupComponent,
    title: 'Manejar grupo'
  },
  {
    path: 'app-strav-login',
    component: StravLoginComponent,
    title: 'Sesion Admin'
  },
  {
    path: 'app-inscriptions-challenge',
    component: InscriptionsChallengeComponent,
    title: 'inscribir reto'
  },
  {
    path: 'app-inscriptions-race',
    component: InscriptionsRaceComponent,
    title: 'inscribir carrera'
  },
  {
    path: "app-participants-report",
    component: ParticipantsReportComponent,
    title: 'Reporte de participantes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
