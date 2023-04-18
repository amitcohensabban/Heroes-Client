import { Component, NgModule, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss'],
})
export class AllHeroesComponent implements OnInit {
  constructor(
    private HeroesService: HeroesService,
    private auth: AuthService
  ) {}
  token: any = localStorage.getItem('token');
  allHeroes: any = [];
  async ngOnInit() {
    const result = await this.HeroesService.getAllHeroes(this.token);
    this.allHeroes = result;
    console.log(this.allHeroes);
  }
}
