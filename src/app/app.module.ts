import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/auth/signup-page/signup-form/signup-form.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { LoginFormComponent} from './components/auth/login-page/login-form/login-form.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,SignupFormComponent,SignupPageComponent,LoginFormComponent,LoginPageComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
