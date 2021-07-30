import { TestsGet } from 'src/app/core/models/tests.model';

import { createAction, props } from '@ngrx/store';

export const getTestsDataSuccess = createAction(
  '[Tests API] Get Tests Data Success',
  props<{ tests: any }>()
);

export const getTestsDataFailure = createAction(
  '[Tests API] Get Tests Data Fail',
  props<{ error: string }>()
);

export const getTestsData = createAction(
  '[Tests Page] Get Tests Data',
  props<{ userId: any; engLevel: any }>()
);

export const cleatTestsData = createAction('[Tests Page] Clean Tests Data');
