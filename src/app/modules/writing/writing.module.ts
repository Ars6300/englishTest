import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingRoutingModule } from './writing-routing.module';
import { WritingComponent } from './writing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputComponent } from './components/input/input.component';
import { WritingQuestion } from 'src/app/core/models/query-types-class';

export const writing = new WritingQuestion();
@NgModule({
  declarations: [
    WritingComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    WritingRoutingModule,
    SharedModule
  ]
})
export class WritingModule { }
