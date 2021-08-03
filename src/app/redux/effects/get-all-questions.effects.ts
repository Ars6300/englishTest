import { Injectable } from '@angular/core';

import { QuestionsService } from 'src/app/core/services/questions/questions.service';

import { map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GetAllQuestionsActions from 'src/app/redux/actions/get-all-questions.actions';

@Injectable()
export class getAllQuestionsEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionsService
  ) {}

  getAllQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetAllQuestionsActions.getQuestions),
      concatMap((action) =>
        this.questionService.getAllQuestions(action.typeModel, action.level).pipe(
          map((allQuestions) => GetAllQuestionsActions.getQuestionsSuccess({ allQuestions })),
          catchError((error) => of(GetAllQuestionsActions.getQuestionsFailure({ error })))
        )
      )
    );
  });
}
