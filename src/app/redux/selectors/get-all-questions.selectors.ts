import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from  '../models/app.state'
import { QuestionsState } from '../reducers/get-all-questions.reducers'

export interface AllQuestionsState extends AppState.State {
  allQuestions: QuestionsState
}

const getAllQuestionsFeatureState = createFeatureSelector<QuestionsState>('allQuestions')

export const getAllQuestions = createSelector(
  getAllQuestionsFeatureState,
  (state) => state.allQuestions
);