import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from 'src/app/pages/question/question.component';
import { ListeningComponent } from './listening.component';

const routes: Routes = [
  {
    path: 'listening', 
    component: ListeningComponent,
    children: [
      {
        path: 'l-question/:id',
        component: QuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeningRoutingModule { }
