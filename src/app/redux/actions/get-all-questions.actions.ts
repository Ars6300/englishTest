import { getQuestion } from 'src/app/core/models/get-question';

import { createAction, props } from '@ngrx/store';

export const getQuestionsSuccess = createAction(
  '[Questions API] Get Questions Data Success',
  props<{ allQuestions: any }>()
);

export const getQuestionsFailure = createAction(
  '[Questions API] Get Questions Data Fail',
  props<{ error: string }>()
);

export const getQuestions = createAction(
  '[Questions Page] Get Questions Data',
  props<{ typeModel: any; level: any }>()
);
