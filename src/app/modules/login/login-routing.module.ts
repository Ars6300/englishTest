import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './login.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [],
  exports: [LoginModule, LoginComponent],
  providers: [],
})
export class LoginRoutingModule { }
