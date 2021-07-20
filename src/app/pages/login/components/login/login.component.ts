import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

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
      password: this.form.value.password,
    }
  
    this.auth.login(user).subscribe( res => {
      console.log(res)
      this.form.reset
      this.router.navigate(['/profile'])
      this.submitted = false
    }, () => {
      this.submitted = false
    }
    )
  }
  
  
  constructor(
    public auth: AuthenticationService,
    private router: Router,
  ) {}
  
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })

  }

}
