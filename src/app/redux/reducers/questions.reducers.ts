import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Question } from 'src/app/core/models/questions.model';
import {
  QuestionActions,
  QuestionActionTypes,
} from '../actions/questions.actions';

export interface QuestionState extends EntityState<Question> {
  loading: boolean;
  error: string;
}

export const questionAdapter: EntityAdapter<Question> =
  createEntityAdapter<Question>();

const questionDefaultState: QuestionState = {
  ids: [],
  entities: {},
  loading: false,
  error: '',
};

export const initialState: QuestionState =
  questionAdapter.getInitialState(questionDefaultState);

export function questionReducer(
  state: QuestionState = initialState,
  action: QuestionActions
): QuestionState {
  switch (action.type) {
    case QuestionActionTypes.GET_QUESTION: {
      return { ...state, loading: true };
    }
    case QuestionActionTypes.GET_QUESTION_SUCCESS: {
      return questionAdapter.setAll(action.payload.questions, {
        ...state,
        loading: false,
      });
    }
    case QuestionActionTypes.GET_QUESTION_FAILURE: {
      return { ...state, loading: false, error: 'Something went wrong' };
    }
    /* case QuestionActionTypes.ADD_QUESTION: {
      return { ...state, loading: true };
    }
    case QuestionActionTypes.ADD_QUESTION_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case QuestionActionTypes.ADD_QUESTION_FAILURE: {
      return { ...state, loading: false, error: 'Something went wrong' };
    }
    case QuestionActionTypes.UPDATE_QUESTION: {
      return { ...state, loading: true };
    }
    case QuestionActionTypes.UPDATE_QUESTION_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case QuestionActionTypes.UPDATE_QUESTION_FAILURE: {
      return { ...state, loading: false, error: 'Something went wrong' };
    }
    case QuestionActionTypes.DELETE_QUESTION: {
      return { ...state, loading: true };
    }
    case QuestionActionTypes.DELETE_QUESTION_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case QuestionActionTypes.DELETE_QUESTION_FAILURE: {
      return { ...state, loading: false, error: 'Something went wrong' };
    } */
    default:
      return state;
  }
}
