import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';

import { QuestionComponent } from 'src/app/pages/question/question.component';
import { QuestionsBlockComponent } from './questions-block/questions-block.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'grammar', component: QuestionsBlockComponent },
];

@NgModule({
  declarations: [QuestionComponent, QuestionsBlockComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //HttpClientModule
  ],
  providers: [],
  exports: [QuestionComponent, QuestionsBlockComponent],
})

export class QuestionsModule {}
