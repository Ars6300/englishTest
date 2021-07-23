import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {
  deleteCookieParams,
  setCookieParams,
} from 'src/app/shared/utils/cookies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: { email: string; password: any }) {
    return this.http.post(environment.api_URL, user).pipe(tap(this.setCookies));
  }

  private setCookies(response: any) {
    if (response) {
      setCookieParams('token', response.token, '3600');
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
