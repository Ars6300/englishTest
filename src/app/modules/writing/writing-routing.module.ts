import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WRITING_PATH } from 'src/app/app-routing.constants';
import { GuardGuard } from 'src/app/core/guard/guard.guard';
import { WritingComponent } from './writing.component';

const routes: Routes = [
  {path: WRITING_PATH, component: WritingComponent, canActivate: [GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingRoutingModule { }
