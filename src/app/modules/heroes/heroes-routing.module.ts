import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { MyHeroesComponent } from './pages/my-heroes/my-heroes.component';

const routes:Routes=[
  {path: 'allHeroes', component:AllHeroesComponent},
  {path: 'myHeroes', component:MyHeroesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HeroesRoutingModule { }
