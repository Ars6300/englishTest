import { SharedModule } from 'src/app/shared/shared.module';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelSelectRoutingModule } from './level-select-routing.module';
import { SelectLevelComponent } from './level-select.component';

@NgModule({
  declarations: [SelectorsComponent, SelectLevelComponent],
  exports: [SelectorsComponent],
  imports: [CommonModule, LevelSelectRoutingModule, SharedModule],
})
export class LevelSelectModule {}
