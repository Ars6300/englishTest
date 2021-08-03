import { getQuestion } from 'src/app/core/models/get-question';
import { createReducer, on } from '@ngrx/store';
import * as GetAllQuestionsActions from 'src/app/redux/actions/get-all-questions.actions';
export const getAllQuestionsFeatureKey = 'allQuestions';

export interface QuestionsState {
  allQuestions: [];
  errors?: {
    loadingError?: string | null;
  };
  isLoading: boolean;
}

const initialState: QuestionsState = {
  allQuestions: [],
  errors: {
    loadingError: ''
  },
  isLoading: false
}

export const getAllQuestionsReducer = createReducer<QuestionsState> (
  initialState,
  on(GetAllQuestionsActions.getQuestions, (state): QuestionsState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(GetAllQuestionsActions.getQuestionsSuccess, (state, action): QuestionsState => {
    return {
      ...state,
      allQuestions: action.allQuestions,
      errors: {
        ...state.errors,
        loadingError: '',
      },
      isLoading: false
    }
  }),
  on(GetAllQuestionsActions.getQuestionsFailure, (state, action): QuestionsState => {
    return {
      ...state,
      errors: {
        loadingError: action.error,
      },
      isLoading: false,
    };
  })
)