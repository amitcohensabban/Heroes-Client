import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private router: Router, private http: HttpClient) {}
  async getAllHeroes(token: string) {
    console.log(token);

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
}
