import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, ResultRoutingModule, SharedModule],
})
export class ResultModule {}
