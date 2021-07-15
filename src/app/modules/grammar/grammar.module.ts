import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrammarRoutingModule } from './grammar-routing.module';
import { GrammarComponent } from './grammar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GrammarComponent
  ],
  imports: [
    CommonModule,
    GrammarRoutingModule,
    SharedModule
  ]
})
export class GrammarModule { }
