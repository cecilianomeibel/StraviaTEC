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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserHomeComponent,
    FriendCardComponent,
    RegisterActivityComponent,
    LoginComponent,
    NewAccountComponent
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
