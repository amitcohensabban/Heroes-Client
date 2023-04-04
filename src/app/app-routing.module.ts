import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { AllHeroesComponent } from './components/heroes/all-heroes/all-heroes.component';
import { MyHeroesComponent } from './components/heroes/my-heroes/my-heroes.component';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'sign-up', component:SignupPageComponent},
  {path:'all-heroes', component:AllHeroesComponent},
  {path:'my-heroes', component:MyHeroesComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'**', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
