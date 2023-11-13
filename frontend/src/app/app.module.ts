import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './reusables/nav-bar/nav-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-view/user-home/user-home.component';
import { FriendCardComponent } from './reusables/friend-card/friend-card.component';
import { RegisterActivityComponent } from './user-view/register-activity/register-activity.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserHomeComponent,
    FriendCardComponent,
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
    ManageChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
