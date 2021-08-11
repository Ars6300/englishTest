import { getTestId } from './../selectors/tests.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/models/state.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { TestsService } from 'src/app/core/services/tests/tests.service';

import { map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as TestsActions from 'src/app/redux/actions/tests.actions';
import { GRAMMAR_PATH, PROFILE_PATH } from 'src/app/app-routing.constants';

@Injectable()
export class TestsEffects {
  constructor(
    private actions$: Actions,
    private testsService: TestsService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TestsActions.getTestsData),
      concatMap((action) =>
        this.testsService.getTests(action.userId, action.engLevel).pipe(
          // Ругается вот тут ({tests}) пишет что : Тип Object можно назначить малому количеству других типов. Возможно, вы хотели использовать тип any? В типе "Object" отсутствуют следующие свойства из типа "TestsGet": id, startTime, endTime, englishLevel, testQuestionSet
          map((tests) => TestsActions.getTestsDataSuccess({ tests })),
          tap(() => this.router.navigate([GRAMMAR_PATH])),
          catchError((error) => of(TestsActions.getTestsDataFailure({ error })))
        )
      )
    );
  });

  completeTests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TestsActions.completeTest),
      concatMap((action) =>
        this.testsService.completeTest(action.testId).pipe(
          map(() => TestsActions.cleanTestsData()),
          tap(() => this.router.navigate([PROFILE_PATH]))
        )
      )
    );
  });
}
