import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../models/users-hr.state.model';

const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getUsersState, (state) => {
  return state.users;
});