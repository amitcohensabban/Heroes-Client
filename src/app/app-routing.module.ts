import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { AllHeroesComponent } from './components/heroes/all-heroes/all-heroes.component';
import { MyHeroesComponent } from './components/heroes/my-heroes/my-heroes.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:'login', component:LoginPageComponent,canActivate:[LoginGuard]},
  {path:'sign-up', component:SignupPageComponent,canActivate:[LoginGuard]},
  {path:'all-heroes', component:AllHeroesComponent,canActivate:[AuthGuard]},
  {path:'my-heroes', component:MyHeroesComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'**', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
