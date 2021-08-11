import { loadProfileResults } from './../actions/profile-results.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { ProfileResultsState } from '../models/profile-results.state.model';

export const initialState: ProfileResultsState = {
  results: [],
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
