import { Action, createReducer, on } from '@ngrx/store';
import { Level } from 'src/app/core/models/level.model';
import * as TestsDoneActions from '../actions/users-admin.actions';
import { TestsDoneState } from '../models/users-admin.state.model';

export const testsDoneFeatureKey = 'testsDone';

export const TESTS_DONE_MOCK = [
  {
    id: '1',
    email: 'user1@exadel.com',
    firstName: 'User',
    lastName: 'User',
    role: 'user',
    level: Level.Advanced
  },
  {
    id: '2',
    email: 'hr1@exadel.com',
    firstName: 'HR',
    lastName: 'HR',
    role: 'hr',
    level: Level.Beginner
  },
  {
    id: '3',
    email: 'coach1@exadel.com',
    firstName: 'Coach',
    lastName: 'Coach',
    role: 'coach',
    level: Level.Upperintermediate
  },
  {
    id: '4',
    email: 'admin1@exadel.com',
    firstName: 'Admin',
    lastName: 'Admin',
    role: 'admin',
    level: Level.Intermediate
  },
];

export const initialState: TestsDoneState = {
  testsDone: TESTS_DONE_MOCK,
};

const testsDoneReducer = createReducer(
  initialState,
  on(TestsDoneActions.LoadTestsDone, (state) => ({
    ...state,
    testsDone: state.testsDone,
  }))
);

export function testsDoneListReducer(state: TestsDoneState, action: Action) {
  return testsDoneReducer(state, action);
}