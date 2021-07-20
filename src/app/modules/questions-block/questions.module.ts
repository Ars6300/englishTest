import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';

import { QuestionComponent } from 'src/app/pages/question/question.component';
import { QuestionsBlockComponent } from './questions-block/questions-block.component';

import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/core/guard/guard.guard';

const routes: Routes = [
  { path: 'grammar', component: QuestionsBlockComponent, canActivate: [GuardGuard] },
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
