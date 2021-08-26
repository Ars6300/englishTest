import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  AuthenticatedResult,
  OidcSecurityService,
} from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ROOT_PATH } from 'src/app/app-routing.constants';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authCheck: boolean | undefined;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private oidcSecurityService: OidcSecurityService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.oidcSecurityService
      .checkAuth()
      .pipe(take(1))
      .subscribe(({ isAuthenticated }) => {
        this.authCheck = isAuthenticated;
      });
    if (this.authCheck) {
      return true;
    } else {
      this.auth.deleteCookie();
      this.router.navigate([ROOT_PATH]);
    }
    return false;
  }
}
