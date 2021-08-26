import { Injectable, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { deleteCookieToken } from 'src/app/shared/utils/cookies';

export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnInit {
  constructor(public oidcSecurityService: OidcSecurityService) {
    console.log(this.token);
  }
  ngOnInit() {}
  
  deleteCookie() {
    deleteCookieToken();
  }

  get token() {
    let res = document.cookie
      .split(';')
      .filter((el) => el.trim().startsWith(TOKEN))[0];
    if (res) {
      return this.splitCookie(res);
    }
    return;
  }

  splitCookie(cookie: string) {
    return cookie.split('=')[1];
  }

  isAuthenticated() {
    return !!this.token;
  }
}
