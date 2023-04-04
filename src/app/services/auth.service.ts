import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable(
  {
  providedIn: 'root'
}
)
export class AuthService {
  private _token: BehaviorSubject<string | null> = new BehaviorSubject<
  string | null
  >('');

  constructor( private router: Router) {}
}
