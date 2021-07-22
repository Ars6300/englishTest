import {
  GrammarActionsQuestionsList,
} from '../actions/questions.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { QuestionsLoadingService } from 'src/app/modules/questions-block/questions-loading.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class QuestionEffects {
  getQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GrammarActionsQuestionsList.LoadQuestions),
      mergeMap(() =>
        this.questionsLoadingService.getQuestions().pipe(
          map((questions) => ({
            type: GrammarActionsQuestionsList.LoadQuestions,
            payload: questions,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private actions$: Actions
  ) {}
}
