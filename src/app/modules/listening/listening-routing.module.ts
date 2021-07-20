import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LISTENING_PATH, QUESTION_LISTENING_PATH } from 'src/app/app-routing.constants';
import { GuardGuard } from 'src/app/core/guard/guard.guard';
import { QuestionComponent } from 'src/app/pages/question/question.component';
import { ListeningComponent } from './listening.component';

const routes: Routes = [
  {
    path: LISTENING_PATH, 
    component: ListeningComponent,
    children: [
      {
        path: QUESTION_LISTENING_PATH,
        component: QuestionComponent
      }
    ],
    canActivate: [GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeningRoutingModule { }
