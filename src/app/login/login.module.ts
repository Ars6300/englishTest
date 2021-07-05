import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LoginContainersComponent } from './containers/login-containers/login-containers.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LoginContainersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginContainersComponent
  ]
})
export class LoginModule { }
