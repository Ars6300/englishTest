import { LeftLayoutComponent } from './../../shared/components/left-layout/left-layout.component';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelSelectRoutingModule } from './level-select-routing.module';

@NgModule({
  declarations: [LeftLayoutComponent, SelectorsComponent],
  exports: [SelectorsComponent],
  imports: [CommonModule, LevelSelectRoutingModule],
})
export class LevelSelectModule {}
