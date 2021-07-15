import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PROFILE_PATH } from 'src/app/app-routing.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Email:' + userForm.controls['email'].value);
    console.log('Password:' + userForm.controls['password'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);
  }
  goToProfile(){
    this.router.navigate([`/${PROFILE_PATH}`])
  }
}
