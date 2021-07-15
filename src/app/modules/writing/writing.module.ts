import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingRoutingModule } from './writing-routing.module';
import { WritingComponent } from './writing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WritingComponent
  ],
  imports: [
    CommonModule,
    WritingRoutingModule,
    SharedModule
  ]
})
export class WritingModule { }
