import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './reusables/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-view/user-home/user-home.component';
import { FriendCardComponent } from './reusables/friend-card/friend-card.component';
import { RegisterActivityComponent } from './user-view/register-activity/register-activity.component';
import { LoginComponent } from './user-view/login/login.component';
import { NewAccountComponent } from './user-view/new-account/new-account.component';
import { AthleteInfoComponent } from './reusables/athlete-info/athlete-info.component';
import { AthleteListComponent } from './user-view/athlete-list/athlete-list.component';
import { InscriptionsComponent } from './user-view/inscriptions/inscriptions.component';
import { ContactComponent } from './user-view/contact/contact.component';
import { StravLoginComponent } from './stravia-view/strav-login/strav-login.component';
import { ManageRaceComponent } from './stravia-view/manage-race/manage-race.component';
import { StravHomeComponent } from './stravia-view/strav-home/strav-home.component';
import { ManageChallengeComponent } from './stravia-view/manage-challenge/manage-challenge.component';
import { InscriptionsRaceComponent } from './reusables/inscriptions-race/inscriptions-race.component';
import { InscriptionsChallengeComponent } from './reusables/inscriptions-challenge/inscriptions-challenge.component';
import { JoinGroupComponent } from './user-view/join-group/join-group.component';
import { ChartComponent } from './reusables/chart/chart.component';
import { RegisteredRacesComponent } from './user-view/registered-races/registered-races.component';
import { RegisteredChallengesComponent } from './user-view/registered-challenges/registered-challenges.component';
import { RegisteredChallengeCardComponent } from './reusables/registered-challenge-card/registered-challenge-card.component';
import { CommentComponent } from './user-view/comment/comment.component';
<<<<<<< Updated upstream
import { HttpClientModule } from '@angular/common/http';
=======
import { ParticipantsReportComponent } from './stravia-view/participants-report/participants-report.component';
import { PositionsReportComponent } from './stravia-view/positions-report/positions-report.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserHomeComponent,
    FriendCardComponent,
    ChartComponent,
    RegisterActivityComponent,
    LoginComponent,
    NewAccountComponent,
    AthleteInfoComponent,
    AthleteListComponent,
    InscriptionsComponent,
    ContactComponent,
    StravLoginComponent,
    ManageRaceComponent,
    StravHomeComponent,
    ManageChallengeComponent,
    InscriptionsRaceComponent,
    InscriptionsChallengeComponent,
    JoinGroupComponent,
    ChartComponent,
    RegisteredRacesComponent,
    RegisteredChallengesComponent,
    RegisteredChallengeCardComponent,
    CommentComponent,
    ParticipantsReportComponent,
    PositionsReportComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
