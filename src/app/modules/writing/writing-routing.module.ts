import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WRITING_PATH } from 'src/app/app-routing.constants';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';
import { WritingComponent } from './writing.component';

const routes: Routes = [
  {path: WRITING_PATH, component: WritingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingRoutingModule { }
