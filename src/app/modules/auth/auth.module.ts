import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SignupFormComponent } from './pages/signup-page/signup-form/signup-form.component';
import { LoginFormComponent } from './pages/login-page/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  ////////
  declarations: [LoginPageComponent,SignupPageComponent, SignupFormComponent, LoginFormComponent],
  imports: [
    CommonModule, AuthRoutingModule, SharedModule
  ]
})
export class AuthModule { }
