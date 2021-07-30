import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuestionsState } from '../models/questions.state.model';

const getQuestionsState = createFeatureSelector<QuestionsState>('questions');

export const getQuestions = createSelector(getQuestionsState, (state) => {
  return state.questions;
});
