import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >('');

  token: Observable<string | null> = this._token.asObservable();
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router, private http: HttpClient) {}

  signUp(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Observable<{ token: string; email: string; password: string }> {
    return this.http.post('https://localhost:7077/api/Guide', data).pipe(
      map((res: any) => {
        const token: string = res.token;
        const email: string = data.email;
        const password: string = data.password;
        return { token, email, password };
      })
    );
  }

  login(data: { email: string; password: string }) {
    return this.http.post('https://localhost:7077/api/Guide/login', data).pipe(
      tap((res: any): void => {
        const token: string = res.token;
        localStorage.setItem('token', res.token);
        this.setToken(token);
        this.isUserLoggedIn.next(true);
        this.router.navigate(['/all-heroes']);
      })
    );
  }
  setToken(value: string) {
    this._token.next(value);
  }
}
