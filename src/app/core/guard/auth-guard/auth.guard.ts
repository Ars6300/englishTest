import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { ROOT_PATH  } from 'src/app/app-routing.constants';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  isAuthenticated$: Observable<AuthenticatedResult> = <
    Observable<AuthenticatedResult>
  >{};
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private oidcSecurityService: OidcSecurityService
  ){this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const authToken = this.oidcSecurityService.getAccessToken();
      const authenticated = this.oidcSecurityService.checkAuth()
      console.log(authToken);
      console.log(authenticated);
      
      if (authenticated) {
        return true;
      } else {
        this.auth.deleteCookie()
        this.router.navigate([ROOT_PATH ]) 
      }
      return true
  }
  
}
