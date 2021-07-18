import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from 'src/app/pages/question/question.component';
import { GrammarComponent } from './grammar.component';

const routes: Routes = [
  {
    path: 'grammar',
    component: GrammarComponent,
    children: [
      {
        path: 'g-question/:id',
        component: QuestionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrammarRoutingModule {}
