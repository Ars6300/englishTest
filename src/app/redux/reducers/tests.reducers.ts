import { TestsGet } from 'src/app/core/models/tests.model';
import { createReducer, on } from '@ngrx/store';
import * as TestsActions from 'src/app/redux/actions/tests.actions';

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
    englishLevel: '',
    id: '',
    testQuestionSet: [
      {
        id: '',
        type: 0,
        audio: {
          id: '',
        },
        question: {
          id: '',
          text: '',
        },
        answersList: [
          {
            id: '',
            text: '',
          }
        ],
      }
    ],
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
          testQuestionSet: [
            {
              id: action.tests.testQuestionSet[0].id,
              type: action.tests.testQuestionSet[0].type,
              audio: action.tests.testQuestionSet[0].audio,
              question: {
                id: action.tests.testQuestionSet[0].question.id,
                text: action.tests.testQuestionSet[0].question.text,
              },
              answersList: [
                {
                  id: action.tests.testQuestionSet[0].answersList[0].id,
                  text: action.tests.testQuestionSet[0].answersList[0].text,
                }
              ]
            }
          ]
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

