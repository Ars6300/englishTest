import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TestsDoneState } from '../models/users-admin.state.model';

const getTestsDoneState = createFeatureSelector<TestsDoneState>('testsDone');

export const getTestsDone = createSelector(getTestsDoneState, (state) => {
  return state.testsDone;
});