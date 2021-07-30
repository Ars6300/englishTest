import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { TestsService } from 'src/app/core/services/tests/tests.service';


import { map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TestsActions from 'src/app/redux/actions/tests.actions'

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private testsService: TestsService,
    private router: Router
  ) {}
  
  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TestsActions.getTestsData),
      concatMap((action) => 
      this.testsService.getTests(action.userId, action.engLevel).pipe(
        // Ругается вот тут ({tests}) пишет что : Тип Object можно назначить малому количеству других типов. Возможно, вы хотели использовать тип any? В типе "Object" отсутствуют следующие свойства из типа "TestsGet": id, startTime, endTime, englishLevel, testQuestionSet
        map((tests) => TestsActions.getTestsDataSuccess({tests})),
        tap(() => this.router.navigate(['/grammar'])),
        catchError((error) => of(TestsActions.getTestsDataFailure({error})))
      ))
    )
  })
}