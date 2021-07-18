import { ResultComponent } from './components/result/result.component';
import { RESULT_PATH } from './../../app-routing.constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: RESULT_PATH, component: ResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
