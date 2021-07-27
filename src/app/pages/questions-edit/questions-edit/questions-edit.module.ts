import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsEditComponent } from '../questions-edit.component';
import { QuestionsTableComponent } from '../questions-table/questions-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [QuestionsEditComponent, QuestionsTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [QuestionsEditComponent, QuestionsTableComponent]
})
export class QuestionsEditModule { }
