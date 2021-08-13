import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {
  deleteCookieParams,
  setCookieParams,
} from 'src/app/shared/utils/cookies';
import { environment } from 'src/environments/environment';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const user = {
      email,
      password,
    };
    return this.http
      .post(`${environment.api_URL}/api/user`, user)
      .pipe(tap(this.setCookies));
  }

  private setCookies(response: any) {
    if (response) {
      setCookieParams(TOKEN, response.token, environment.COOKIE_KEEP_SECONDS);
    }
  }

  deleteCookie() {
    deleteCookieParams();
  }

  get token() {
    return document.cookie
      .split(';')
      .map((cookie) =>
        cookie.startsWith(TOKEN) ? this.splitCookie(cookie) : null
      )[0];
  }

  splitCookie(cookie: string) {
    return cookie.split('=')[1];
  }

  isAuthenticated() {
    return !!this.token;
  }
}
