import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users-hr.actions';
import { UsersState } from '../models/users-hr.state.model';

export const usersFeatureKey = 'users';

export const USERS_MOCK = [
  {
    id: '1',
    email: 'user1@exadel.com',
    firstName: 'User',
    lastName: 'User',
    role: 'user',
  },
  {
    id: '2',
    email: 'hr1@exadel.com',
    firstName: 'HR',
    lastName: 'HR',
    role: 'hr',
  },
  {
    id: '3',
    email: 'coach1@exadel.com',
    firstName: 'Coach',
    lastName: 'Coach',
    role: 'coach',
  },
  {
    id: '4',
    email: 'admin1@exadel.com',
    firstName: 'Admin',
    lastName: 'Admin',
    role: 'admin',
  },
];

export const initialState: UsersState = {
  users: USERS_MOCK,
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.LoadUsers, (state) => ({
    ...state,
    questions: state.users,
  }))
);

export function userListReducer(state: UsersState, action: Action) {
  return usersReducer(state, action);
}
