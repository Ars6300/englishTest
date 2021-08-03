import { ResultComponent } from './result/result.component';
import { RESULT_PATH } from './../../app-routing.constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';

const routes: Routes = [{ path: RESULT_PATH, component: ResultComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
