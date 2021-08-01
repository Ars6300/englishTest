import { TestsGet } from 'src/app/core/models/tests.model';
import { createReducer, on } from '@ngrx/store';
import * as TestsActions from 'src/app/redux/actions/tests.actions';
import { QuestionComponent } from 'src/app/pages/question/question.component';
import { QuestionType } from 'src/app/core/models/test.model';
import { Level } from 'src/app/core/models/level.model'
export const testsFeatureKey = 'tests';

export interface TestsState {
  testsData: TestsGet,
  errors?: {
    loadingError?: string | null,
  },
  isLoading: boolean
}

const initialState: TestsState = {
  testsData: {
    startTime: '',
    endTime: '',
    englishLevel: Level.Beginner,
    id: '',
    testQuestionSet: [],
  },
  errors: {
    loadingError: ''
  },
  isLoading: false
}

export const testsReducer = createReducer<TestsState>(
  initialState,
  on(
    TestsActions.getTestsData,
    (state): TestsState => {
      return {
        ...state,
        isLoading: true
      }
    }
  ),
  on(
    TestsActions.getTestsDataSuccess,
    (state, action): TestsState => {
      return {
        ...state,
        testsData: {
          startTime: action.tests.startTime,
          endTime: action.tests.endTime,
          englishLevel: action.tests.englishLevel,
          id: action.tests.id,
          testQuestionSet: action.tests.testQuestionSet
        },
        errors: {
          ...state.errors,
          loadingError: ''
        },
        isLoading: false
      }
    }
  ),
  on(
    TestsActions.getTestsDataFailure,
    (state, action): TestsState => {
      return {
        ...state,
        errors: {
          loadingError: action.error
        },
        isLoading: false
      }
    }
  )
)

