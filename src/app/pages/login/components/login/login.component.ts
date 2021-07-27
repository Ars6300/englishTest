import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { FakeAuthenticationService } from 'src/app/core/authentication/fakeAuth.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup
  submitted = false

  submit(){
    if (this.form.invalid ) {
      return;
    }
    this.submitted = true

    const user = {
      email: this.form.value.email,
      password: btoa(this.form.value.password),
    }

    // ************ real ************
    // email1@exadel.com
    // 11111111
    
    // this.auth.login(user).subscribe( res => {
    //   console.log(res);
    //   this.form.reset()
    //   this.router.navigate(['/profile'])
    //   this.submitted = false
    // }, () => {
    //   this.submitted = false
    // }
    // )

    // ************ fake ************
    this.fakeAuth.login(user)
  }
  
  
  constructor(
    public auth: AuthenticationService,
    public fakeAuth: FakeAuthenticationService,
    private router: Router,
  ) {}
  
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
  }

}
