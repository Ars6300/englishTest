import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakingRoutingModule } from './speaking-routing.module';
import { SpeakingComponent } from './speaking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeakingQuestion } from 'src/app/core/models/query-types-class';

export const speaking = new SpeakingQuestion();
@NgModule({
  declarations: [SpeakingComponent],
  imports: [CommonModule, SpeakingRoutingModule, SharedModule],
})
export class SpeakingModule {}
