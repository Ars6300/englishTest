import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGIN_PATH } from 'src/app/app-routing.constants';

import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: LOGIN_PATH, component: LoginComponent },
  { path: '', component: LoginComponent },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}
