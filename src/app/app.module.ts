import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BotComponent } from './bot/bot.component';
import { FindServiceComponent } from './find-service/find-service.component';
import { ForumComponent } from './forum/forum.component';
import { GiveServiceComponent } from './give-service/give-service.component';
import { NavigationComponent } from './interface/navigation/navigation.component';
import { HeaderComponent } from './interface/navigation/header/header.component';
import { NavBarComponent } from './interface/navigation/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    BotComponent,
    FindServiceComponent,
    ForumComponent,
    GiveServiceComponent,
    NavigationComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
