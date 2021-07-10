import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }];
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
