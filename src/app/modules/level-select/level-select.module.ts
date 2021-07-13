import { SharedModule } from 'src/app/shared/shared.module';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelSelectRoutingModule } from './level-select-routing.module';

@NgModule({
  declarations: [SelectorsComponent],
  exports: [SelectorsComponent],
  imports: [CommonModule, LevelSelectRoutingModule, SharedModule],
})
export class LevelSelectModule {}
