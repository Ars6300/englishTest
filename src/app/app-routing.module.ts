import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';
import { ErrorModule } from './modules/error/error.module'

import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];
@NgModule({
  imports: [LoginModule, RouterModule.forRoot(routes), ErrorModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
