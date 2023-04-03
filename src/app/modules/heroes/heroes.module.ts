import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MyHeroesComponent } from './pages/my-heroes/my-heroes.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';



@NgModule({
  declarations: [MyHeroesComponent,AllHeroesComponent],
  imports: [
    CommonModule,SharedModule,HeroesRoutingModule
  ]
})
export class HeroesModule { }
