import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable(
  {
  providedIn: 'root'
}
)
export class AuthService {
  private _token: BehaviorSubject<string | null> = new BehaviorSubject<
  string | null
  >('');

  token: Observable<string | null> = this._token.asObservable();


  constructor( private router: Router,private http: HttpClient) {


  }

  login(data: { email: string; password: string }) {
    return this.http.post('https://localhost:7077/api/Guide', data).pipe(
      tap((res: any): void => {
        const token: string = res.token;

        localStorage.setItem('token', res.token);
        this.setToken(token);

        this.router.navigate(['/all-heroes']);
      })
    );
  }
  setToken(value: string) {
    this._token.next(value);
  }

}
