import { ProfileResult } from './../../core/models/profile-result.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileResultsState } from '../models/profile-results.state.model';

export const featureKey = 'profile-results';

export const selectProfileResults =
  createFeatureSelector<ProfileResultsState>(featureKey);
export const getProfileResults = createSelector(
  selectProfileResults,
  (state: ProfileResultsState): ProfileResult[] => state.results
);
