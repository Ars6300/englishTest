import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

import { QuestionComponent } from 'src/app/pages/question/question.component';
import { QuestionsBlockComponent } from './questions-block/questions-block.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';

import { QuestionEffects } from 'src/app/redux/effects/questions.effects';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppSerializer } from './questions-block/serializer';
import { GrammarQuestion } from '../../core/models/query-types-class'

import { GRAMMAR_PATH, LISTENING_PATH } from 'src/app/app-routing.constants';
import { AudioComponent } from './audio/audio.component';

const routes: Routes = [
  { path: GRAMMAR_PATH, component: QuestionsBlockComponent, canActivate: [AuthGuard] },
  { path: LISTENING_PATH, component: QuestionsBlockComponent, canActivate: [AuthGuard] },

];

export const grammar = new GrammarQuestion();
@NgModule({
  declarations: [QuestionComponent, QuestionsBlockComponent, AudioComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    StoreRouterConnectingModule.forRoot({
      serializer: AppSerializer,
    }),
  ],
  providers: [
    QuestionEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [QuestionEffects],
    },
  ],
  exports: [QuestionComponent, QuestionsBlockComponent, AudioComponent],
})

export class QuestionsModule {}
