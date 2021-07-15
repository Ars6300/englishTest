import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SELECT_LEVEL_PATH } from 'src/app/app-routing.constants';
import { SelectLevelComponent } from './level-select.component';

const routes: Routes = [
  {path: SELECT_LEVEL_PATH, component: SelectLevelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelSelectRoutingModule { }
