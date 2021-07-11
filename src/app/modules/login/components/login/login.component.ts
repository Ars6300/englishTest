import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Email:' + userForm.controls['email'].value);
    console.log('Email:' + userForm.controls['password'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);
  }
}
