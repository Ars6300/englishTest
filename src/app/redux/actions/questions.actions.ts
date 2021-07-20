import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/core/models/questions.model';

export enum GrammarActionsQuestionsList {
  LoadQuestions = '[Questions Page] Load Questions',
}

export const LoadQuestions = createAction(
  GrammarActionsQuestionsList.LoadQuestions,
  props<{questions: Question }>()
);
