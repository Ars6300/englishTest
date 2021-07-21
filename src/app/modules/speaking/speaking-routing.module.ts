import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SPEAKING_PATH } from 'src/app/app-routing.constants';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';
import { SpeakingComponent } from './speaking.component';

const routes: Routes = [
  {path: SPEAKING_PATH, component: SpeakingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakingRoutingModule { }
