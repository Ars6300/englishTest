import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeningRoutingModule } from './listening-routing.module';
import { ListeningComponent } from './listening.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListeningQuestion } from 'src/app/core/models/query-types-class';

export const listening = new ListeningQuestion();
@NgModule({
  declarations: [ListeningComponent],
  imports: [CommonModule, ListeningRoutingModule, SharedModule],
})
export class ListeningModule {}
