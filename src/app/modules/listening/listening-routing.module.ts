import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LISTENING_PATH,
  QUESTION_LISTENING_PATH,
} from 'src/app/app-routing.constants';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';
import { QuestionsBlockComponent } from '../questions-block/questions-block/questions-block.component';
import { ListeningComponent } from './listening.component';

const routes: Routes = [
  {
    path: LISTENING_PATH,
    component: ListeningComponent,
    children: [
      {
        path: QUESTION_LISTENING_PATH,
        component: QuestionsBlockComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeningRoutingModule {}
