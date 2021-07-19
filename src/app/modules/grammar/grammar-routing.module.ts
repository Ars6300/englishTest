import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GRAMMAR_PATH, QUESTION_GRAMMAR_PATH } from 'src/app/app-routing.constants';
import { QuestionComponent } from 'src/app/pages/question/question.component';
import { GrammarComponent } from './grammar.component';

const routes: Routes = [
  {
    path: GRAMMAR_PATH, 
    component: GrammarComponent,
    children: [
      {
        path: QUESTION_GRAMMAR_PATH,
        component: QuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrammarRoutingModule {}
