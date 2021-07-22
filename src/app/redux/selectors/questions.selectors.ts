import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuestionsState } from '../reducers/questions.reducers';

const getQuestionsState = createFeatureSelector<QuestionsState>('questions');

export const getQuestions = createSelector(getQuestionsState, (state) => {
    return state.questions;
});

