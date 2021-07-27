import { loadProfileResults } from './../actions/profile-results.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { Level } from 'src/app/core/models/level.model';
import { ProfileResult } from './../../core/models/profile-result.model';
export interface ProfileResultsState {
  results: ProfileResult[];
}

export const RESULTS_MOCK: ProfileResult[] = [
  {
    date: new Date(),
    level: Level.Advanced,
    status: 'PASSED',
    grammarScore: 10,
    listeningScore: 10,
    writingScore: 10,
    speakingScore: 10,
    totalScore: 10,
  },
  {
    date: new Date(),
    level: Level.Advanced,
    status: 'PASSED',
    grammarScore: 10,
    listeningScore: 10,
    writingScore: 10,
    speakingScore: 10,
    totalScore: 10,
  },
];

export const initialState: ProfileResultsState = {
  results: RESULTS_MOCK,
};

const profileResultsReducer = createReducer(
  initialState,
  on(loadProfileResults, (state: ProfileResultsState, { payload }) => ({
    ...state,
    results: payload,
  }))
);

export function reducer(state: ProfileResultsState, action: Action) {
  return profileResultsReducer(state, action);
}
