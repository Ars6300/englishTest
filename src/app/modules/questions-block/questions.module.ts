import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';

import { QuestionComponent } from 'src/app/pages/question/question.component';
import { QuestionsBlockComponent } from './questions-block/questions-block.component';

import { RouterModule, Routes } from '@angular/router';
import { QuestionEffects } from 'src/app/redux/effects/questions.effects';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { GRAMMAR_PATH } from 'src/app/app-routing.constants';

const routes: Routes = [
  { path: GRAMMAR_PATH, component: QuestionsBlockComponent },
];

@NgModule({
  declarations: [QuestionComponent, QuestionsBlockComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //HttpClientModule
  ],
  providers: [
    QuestionEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [QuestionEffects],
    },
  ],
  exports: [QuestionComponent, QuestionsBlockComponent],
})
export class QuestionsModule {}
