import {
GetQuestion,
GetQuestionSuccess,
GetQuestionFailure,
/* AddQuestion,
AddQuestionSuccess,
AddQuestionFailure,
UpdateQuestion,
UpdateQuestionSuccess,
UpdateQuestionFailure,
DeleteQuestion,
DeleteQuestionSuccess,
DeleteQuestionFailure, */
QuestionActionTypes
} from '../actions/questions.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { QuestionsLoadingService } from 'src/app/modules/questions-block/questions-loading.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class QuestionEffects {
    constructor(
        private questionsLoadingService: QuestionsLoadingService,
        private actions: Actions) {}

        public getQuestions = createEffect(() => {
            return this.actions.pipe(
                ofType<GetQuestion>(QuestionActionTypes.GET_QUESTION),
                mergeMap(() => {
                    return this.questionsLoadingService.getQuestions().pipe(
                        map((questions) => new GetQuestionSuccess({ questions })),
                        catchError(() => of(new GetQuestionFailure()))
                    );
                })
            );
        });

        /* public addQuestion = createEffect(() => {
            return this.actions.pipe(
                ofType<AddQuestion>(QuestionActionTypes.ADD_QUESTION),
                mergeMap(async (action) => {
                    return this.questionsLoadingService
                    .addQuestion(action.payload.questionText)
                    .then(() => new AddQuestionSuccess())
                    .catch(() => new AddQuestionFailure());
                })
            );
        });

        public updateQuestion = createEffect(() => {
            return this.actions.pipe(
                ofType<UpdateQuestion>(QuestionActionTypes.UPDATE_QUESTION),
                mergeMap(async (action) => {
                    return this.questionsLoadingService
                    .updateQuestion(action.payload.questionId)
                    .then(() => new UpdateQuestionSuccess())
                    .catch(() => new UpdateQuestionFailure());
                })
            );
        });

        public deleteQuestion = createEffect(() => {
            return this.actions.pipe(
                ofType<DeleteQuestion>(QuestionActionTypes.DELETE_QUESTION),
                mergeMap(async (action) => {
                    return this.questionsLoadingService
                    .deleteQuestion(action.payload.questionId)
                    .then(() => new DeleteQuestionSuccess())
                    .catch(() => new DeleteQuestionFailure());
                })
            );
        }); */
}