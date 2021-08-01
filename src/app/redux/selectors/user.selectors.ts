import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from  '../../state/app.state'
import { AuthState } from '../reducers/user.reducers'

export interface State extends AppState.State {
  auth: AuthState
}

  const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getLoginError = createSelector(
  getAuthFeatureState,
  (state) => state.errors?.loginError
);

export const getLoadingStatus = createSelector(
  getAuthFeatureState,
  (state) => state.isLoading
);

export const getUserToken = createSelector(
  getAuthFeatureState,
  (state) => state.currentUser.token
);

export const getUserRole = createSelector(
  getAuthFeatureState,
  (state) =>  state.currentUser.user.role
)

export const getUserName = createSelector(
  getAuthFeatureState,
  (state) =>  state.currentUser.user.firstName
)

export const getUserId = createSelector(
  getAuthFeatureState,
  (state) => state.currentUser.user.id
)