import { Component, OnInit } from '@angular/core';
import {
  AuthenticatedResult,
  OidcClientNotification,
  OidcSecurityService,
  OpenIdConfiguration,
  UserDataResult,
} from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private _configurations: OpenIdConfiguration[] = <OpenIdConfiguration[]>{};
  public get configurations(): OpenIdConfiguration[] {
    return this._configurations;
  }
  public set configurations(value: OpenIdConfiguration[]) {
    this._configurations = value;
  }
  // userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<UserDataResult> = <Observable<UserDataResult>>{};
  isAuthenticated$: Observable<AuthenticatedResult> = <Observable<AuthenticatedResult>>{};
  

  constructor(public oidcSecurityService: OidcSecurityService) {
    this._configurations = this.oidcSecurityService.getConfigurations();
    this.userData$ = this.oidcSecurityService.userData$;
    this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
  }

  ngOnInit() {
    // this.configurations = this.oidcSecurityService.getConfigurations();
    // this.userData$ = this.oidcSecurityService.userData$;
    // this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
  }

  login(configId: string) {
    this.oidcSecurityService.authorize(configId);
  }

  forceRefreshSession() {
    this.oidcSecurityService.forceRefreshSession().subscribe((result) => console.warn(result));
  }

  logout(configId: string) {
    this.oidcSecurityService.logoff(configId);
  }

  refreshSessionId4(configId: string) {
    this.oidcSecurityService.forceRefreshSession(null || undefined, configId).subscribe((result) => console.log(result));
  }

  refreshSessionAuth0(configId: string) {
    this.oidcSecurityService
      .forceRefreshSession({ scope: 'openid profile role Front' }, configId)
      .subscribe((result) => console.log(result));
  }

  logoffAndRevokeTokens(configId: string) {
    this.oidcSecurityService.logoffAndRevokeTokens(configId).subscribe((result) => console.log(result));
  }

  revokeRefreshToken(configId: string) {
    this.oidcSecurityService.revokeRefreshToken(null, configId).subscribe((result) => console.log(result));
  }
}
