import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FindServiceComponent } from './find-service/find-service.component';
import { ForumComponent } from './forum/forum.component';
import { GiveServiceComponent } from './give-service/give-service.component';
import { NavigationComponent } from './interface/navigation/navigation.component';
import { HeaderComponent } from './interface/navigation/header/header.component';
import { NavBarComponent } from './interface/navigation/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FindServiceComponent,
    ForumComponent,
    GiveServiceComponent,
    NavigationComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
