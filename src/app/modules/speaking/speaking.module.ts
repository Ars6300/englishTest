import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakingRoutingModule } from './speaking-routing.module';
import { SpeakingComponent } from './speaking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SpeakingComponent
  ],
  imports: [
    CommonModule,
    SpeakingRoutingModule,
    SharedModule
  ]
})
export class SpeakingModule { }
