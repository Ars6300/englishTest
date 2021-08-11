import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as TestState from '../models/tests.state.model';
import { TestsState } from '../reducers/tests.reducers';

export interface AllTestsState extends TestState.TestDataState {
  allQuestions: TestsState;
}

const getAllTestFeatureState = createFeatureSelector<TestsState>('tests');

export const getAllTests = createSelector(
  getAllTestFeatureState,
  (state) => state.testsData.userAnswerSet
);

export const getTestStartTime = createSelector(
  getAllTestFeatureState,
  (state) => state.testsData.startTime
);

export const getTestId = createSelector(
  getAllTestFeatureState,
  (state) => state.testsData.testId
);
