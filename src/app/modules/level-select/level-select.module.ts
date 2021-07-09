import { LeftLayoutComponent } from './../../shared/components/left-layout/left-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelSelectRoutingModule } from './level-select-routing.module';
import { SelectorsComponent } from './components/selectors/selectors.component';

@NgModule({
  declarations: [LeftLayoutComponent, SelectorsComponent],
  imports: [CommonModule, LevelSelectRoutingModule],
})
export class LevelSelectModule {}
