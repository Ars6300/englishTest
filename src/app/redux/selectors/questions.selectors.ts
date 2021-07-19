import { createFeatureSelector, createSelector } from '@ngrx/store';

import { questionAdapter, QuestionState } from '../reducers/questions.reducers';

const questionFeatureSelector =
  createFeatureSelector<QuestionState>('questions');

export const getQuestions = createSelector(
  questionFeatureSelector,
  questionAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  questionFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  questionFeatureSelector,
  (state) => state.error
);
