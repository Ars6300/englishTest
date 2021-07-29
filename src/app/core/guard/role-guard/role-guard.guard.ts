import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'
import { getUserRole } from 'src/app/redux/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(
    private store: Store<State>,
    private router: Router
  ) {
   
    
    
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let getUserRole$ = this.store.select(getUserRole)
      // if ( !== 'couch') {
      //   this.router.navigate(['/user']);
      // } else {
      //   return true;
      // }
      return false
  }
  
}
