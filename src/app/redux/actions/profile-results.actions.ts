import { ProfileResult } from './../../core/models/profile-result.model';
import { createAction, props } from '@ngrx/store';

export const fetchProfileResults = createAction('[Results Page] Fetch Results');

export const loadProfileResults = createAction(
  '[Results Page] Load Results',
  props<{ payload: ProfileResult[] }>()
);
