import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectLevelComponent } from './level-select.component';

const routes: Routes = [
  {path: 'select-level', component: SelectLevelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelSelectRoutingModule { }
