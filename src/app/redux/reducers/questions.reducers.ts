import { Action, createReducer, on } from '@ngrx/store';
import { Level } from 'src/app/core/models/level.model';
import * as QuestionsActions from '../actions/questions.actions';
import { QuestionsState } from '../models/questions.state.model';

export const questionsFeatureKey = 'questions';

// export const QUESTIONS_MOCK = [
//   {
//     id: '1',
//     answers: ['before', 'use to', "didn't", 'used to'],
//     text: "She ________ have short hair, but now it's long",
//     type: 1,
//     audioLink: 'string',
//     level: Level.Advanced,
//   },
//   {
//     id: '2',
//     answers: ["don't", "can't", 'not can', 'am not'],
//     text: "I'm busy on Friday, so I ________ come",
//     type: 2,
//     audioLink: 'string',
//     level: Level.Intermediate,
//   },
//   {
//     id: '3',
//     answers: [
//       'had arrived, would have missed',
//       'would arrive, would miss',
//       'would have arrived, would have missed',
//       'arrived, would have missed',
//     ],
//     text: 'If he ________ one minute later, he ________ the train',
//     type: 3,
//     audioLink: 'string',
//     level: Level.Upperintermediate,
//   },
// ];



export const initialState: QuestionsState = {
  questions: [],
};

const questionsReducer = createReducer(
  initialState,
  on(QuestionsActions.LoadQuestions, (state) => ({
    ...state,
    questions: state.questions,
  }))
);

export function questionListReducer(state: QuestionsState, action: Action) {
  return questionsReducer(state, action);
}
