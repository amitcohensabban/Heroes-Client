import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}
  myHeroesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  async getAllHeroes(token: string) {
    // console.log(token);
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      const res = await this.http
        .get('https://localhost:7077/api/Heroes', { headers })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }

  async getMyHeroes(token: string) {
    console.log(token);
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      const res = await this.http
        .get(
          `https://localhost:7077/api/Heroes/users/${localStorage.getItem(
            'userName'
          )}/heroes`,
          { headers }
        )
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }

  async trainHero(hero:any) {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      console.log(headers);
      console.log(localStorage.getItem('userName'));

      const res = await this.http
        .patch(
          `https://localhost:7077/api/Heroes/users/${localStorage.getItem('userName')}/heroes/${hero.name}`,
          null, { headers }
        )
        .toPromise();
        console.log(res);


      return res;
    } catch (err) {
      return err;
    }
  }

  async addHero(token: string) {
    console.log(token);
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      const res = await this.http
        .post(`https://localhost:7077/api/Heroes/addHero?heroName=${localStorage.getItem('heroName')}`,null, { headers })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }}
