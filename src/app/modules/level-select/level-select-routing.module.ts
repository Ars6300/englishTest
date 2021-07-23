import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SELECT_LEVEL_PATH } from 'src/app/app-routing.constants';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';
import { SelectLevelComponent } from './level-select.component';

const routes: Routes = [
  {path: SELECT_LEVEL_PATH, component: SelectLevelComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelSelectRoutingModule { }
