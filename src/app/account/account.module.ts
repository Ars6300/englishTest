import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ACCOUNT_PATH } from '../app-routing.constants';

const routes: Routes = [
  { path: ACCOUNT_PATH, component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountModule { }
