import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { FakeAuthenticationService } from 'src/app/core/authentication/fakeAuth.service';
import {
  getLoadingStatus,
  getLoginError,
} from 'src/app/redux/selectors/user.selectors';
import * as AuthPageAction from 'src/app/redux/actions/user.actions';
import { finalize } from 'rxjs/operators';
import { AuthenticatedResult, OidcSecurityService, OpenIdConfiguration, UserDataResult } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // form!: FormGroup;
  // submitted = false;
  // errorMessage$ = this.store.select(getLoginError);
  // isLoading$ = this.store.select(getLoadingStatus);

  submit() {
    // if (this.form.invalid) {
    //   return;
    // }
    // this.submitted = true;

    // const user = {
    //   email: this.form.value.email,
    //   password: btoa(this.form.value.password),
    // };

    // ************ real ************

    // this.store.dispatch(
    //   AuthPageAction.loginUser({
    //     email: user.email,
    //     password: user.password,
    //   })
    // );

    
    // if (!!this.store.select(getLoadingStatus)) {
    //   this.form.reset();
    // }

    // ************ fake ************
    // this.fakeAuth.login(user)

    // ***********************************************

    // this.auth.login(user.email, user.password)
    //   .pipe(finalize(() => {
    //   }))  
    //   .subscribe(
    //   result => {         
    //      if(result) {
    //        this.success = true;
    //      }
    //   },
    //   error => {
    //     this.error = error;       
    //   });
  }
  private _configurations: OpenIdConfiguration[] = <OpenIdConfiguration[]>{};
  public get configurations(): OpenIdConfiguration[] {
    return this._configurations;
  }
  public set configurations(value: OpenIdConfiguration[]) {
    this._configurations = value;
  }
  // userData$: Observable<UserDataResult> = <Observable<UserDataResult>>{};
  // isAuthenticated$: Observable<AuthenticatedResult> = <Observable<AuthenticatedResult>>{};

  constructor(
    // public auth: AuthenticationService,
    // public fakeAuth: FakeAuthenticationService,
    private store: Store<State>,
    public oidcSecurityService: OidcSecurityService
  ) {
    this._configurations = this.oidcSecurityService.getConfigurations();
    // this.userData$ = this.oidcSecurityService.userData$;
    // this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
  }

  login(configId: string) {
    this.oidcSecurityService.authorize(configId);
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(8),
    //   ]),
    // });
    
  }
}
