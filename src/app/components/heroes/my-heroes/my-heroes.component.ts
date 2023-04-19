import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.scss'],
})
export class MyHeroesComponent implements OnInit {
  constructor(
    private HeroesService: HeroesService,
    private auth: AuthService
  ) {}
  myHeroes: any = [];
  async ngOnInit() {
    const token: any = localStorage.getItem('token');
    const result = await this.HeroesService.getMyHeroes(token);
    this.myHeroes = result;
    console.log(this.myHeroes);
  }
  trainHeroButton(hero:any){
    this.HeroesService.trainHero(hero);
  }
}
