import { ResultComponent } from './components/result/result.component';
import { RESULT_PATH } from './../../app-routing.constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/core/guard/guard.guard';

const routes: Routes = [{ path: RESULT_PATH, component: ResultComponent, canActivate: [GuardGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
