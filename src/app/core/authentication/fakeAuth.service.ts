import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  deleteCookieParams,
  setCookieParams,
} from 'src/app/shared/utils/cookies';

@Injectable({
  providedIn: 'root',
})
export class FakeAuthenticationService {
  constructor(private router: Router) {}

  login(user: { email: string; password: any }) {
    if (user.email === user.email && user.password === user.password) {
      this.router.navigate(['/profile']);
      setCookieParams(
        'token',
        'token123123123',
        environment.COOKIE_KEEP_SECONDS
      );
    }
  }

  deleteCookie() {
    deleteCookieParams();
  }

  get token() {
    return document.cookie
      .split(';')
      .map((cookie) =>
        cookie.startsWith('token') ? cookie.split('=')[1] : null
      )[0];
  }

  isAuthenticated() {
    return !!this.token;
  }
}
