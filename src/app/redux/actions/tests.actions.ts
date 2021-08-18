import { TestsGet } from 'src/app/core/models/tests.model';

import { createAction, props } from '@ngrx/store';

export const getTestsDataSuccess = createAction(
  '[Tests API] Get Tests Data Success',
  // Если передаю вместо any TestsGet , он ругается в tests.effects ----->
  props<{ tests: any }>()
);

export const getTestsDataFailure = createAction(
  '[Tests API] Get Tests Data Fail',
  props<{ error: string }>()
);

export const getTestsData = createAction(
  '[Tests Page] Get Tests Data',
  props<{ englishLevel: string }>()
);

export const cleanTestsData = createAction('[Tests Page] Clean Tests Data');

export const completeTest = createAction(
  '[Tests Page] Complete Test',
  props<{ testId: string }>()
);

export function TestsActions(): import('rxjs').Observable<any> {
  throw new Error('Function not implemented.');
}
