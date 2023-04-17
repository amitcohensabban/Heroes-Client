import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/auth/signup-page/signup-form/signup-form.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { LoginFormComponent} from './components/auth/login-page/login-form/login-form.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllHeroesComponent } from './components/heroes/all-heroes/all-heroes.component';
import { MyHeroesComponent } from './components/heroes/my-heroes/my-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupPageComponent,
    LoginFormComponent,
    LoginPageComponent,
    HeaderComponent,AllHeroesComponent,MyHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule 
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
