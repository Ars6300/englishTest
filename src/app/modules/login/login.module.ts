import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
})
export class LoginModule { }