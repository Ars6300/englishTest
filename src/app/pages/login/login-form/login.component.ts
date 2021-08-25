import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';

import {
  AuthenticatedResult,
  OidcSecurityService,
  OpenIdConfiguration,
  UserDataResult,
} from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TOKEN } from 'src/app/core/authentication/authentication.service';
import { environment } from 'src/environments/environment';
import { setCookieParams } from 'src/app/shared/utils/cookies';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private _configurations: OpenIdConfiguration[] = <OpenIdConfiguration[]>{};
  public get configurations(): OpenIdConfiguration[] {
    return this._configurations;
  }
  public set configurations(value: OpenIdConfiguration[]) {
    this._configurations = value;
  }
  isAuthenticated$: Observable<AuthenticatedResult> = <
    Observable<AuthenticatedResult>
  >{};

  constructor(
    private store: Store<State>,
    public oidcSecurityService: OidcSecurityService,
    private route: Router
  ) {
    this._configurations = this.oidcSecurityService.getConfigurations();
    this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;

    this.oidcSecurityService
      .checkAuth()
      .pipe(take(1))
      .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        let authToken = this.oidcSecurityService.getAccessToken();
        if (isAuthenticated) {
          setCookieParams(TOKEN, authToken, environment.COOKIE_KEEP_SECONDS);
          this.route.navigate(['/profile']);
        } else {
          this.route.navigate(['/login']);
        }
      });
  }

  login(configId: string) {
    this.oidcSecurityService.authorize(configId);
  }

  ngOnInit() {}
}
