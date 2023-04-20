import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.scss'],
})
export class MyHeroesComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private auth: AuthService
  ) {}
  myHeroes: any = [];
  myHeroesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  async ngOnInit() {
    const token: any = localStorage.getItem('token');
    const result = await this.heroesService.getMyHeroes(token);
    this.myHeroes = result;
    this.myHeroesSubject.next(this.myHeroes);
    console.log(this.myHeroes);
  }
  async trainHeroButton(hero: any) {
    const res = await this.heroesService.trainHero(hero);
    console.log(res);
    if (res) {
      console.log('train hero');
      this.trainHero(hero, res);
    }
  }
  trainHero(hero: any, res: any) {
    hero.currentPower = res.currentPower;
    hero.lastTrainingDate = res.lastTrainingDate;
  }
}
