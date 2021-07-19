import { Action } from "@ngrx/store";

import { Question } from "src/app/core/models/questions.model";

export enum QuestionActionTypes {
    GET_QUESTION = '[GET QUESTION]',
    GET_QUESTION_SUCCESS = '[GET QUESTION] SUCCESS',
    GET_QUESTION_FAILURE = '[GET QUESTION] FAILURE',

    /* ADD_QUESTION = '[ADD QUESTION]',
    ADD_QUESTION_SUCCESS = '[ADD QUESTION] SUCCESS',
    ADD_QUESTION_FAILURE = '[ADD QUESTION] FAILURE',

    UPDATE_QUESTION = '[UPDATE QUESTION]',
    UPDATE_QUESTION_SUCCESS = '[UPDATE QUESTION] SUCCESS',
    UPDATE_QUESTION_FAILURE = '[UPDATE QUESTION] FAILURE',

    DELETE_QUESTION = '[DELETE QUESTION]',
    DELETE_QUESTION_SUCCESS = '[DELETE QUESTION] SUCCESS',
    DELETE_QUESTION_FAILURE = '[DELETE QUESTION] FAILURE', */
}

export class GetQuestion implements Action {
    readonly type = QuestionActionTypes.GET_QUESTION;
}

export class GetQuestionSuccess implements Action {
    readonly type = QuestionActionTypes.GET_QUESTION_SUCCESS;
    constructor(
        public payload: {
            questions: Question[];
        }
    ) {}
}

export class GetQuestionFailure implements Action {
    readonly type = QuestionActionTypes.GET_QUESTION_FAILURE;
}

/* export class AddQuestion implements Action {
    readonly type = QuestionActionTypes.ADD_QUESTION;
    constructor(
        public payload: {
            questionText: string;
        }
    ) {}
}

export class AddQuestionSuccess implements Action {
    readonly type = QuestionActionTypes.ADD_QUESTION_SUCCESS;
}

export class AddQuestionFailure implements Action {
    readonly type = QuestionActionTypes.ADD_QUESTION_FAILURE;
}

export class UpdateQuestion implements Action {
    readonly type = QuestionActionTypes.UPDATE_QUESTION;
    constructor(
        public payload: {
            questionId: string;
        }
    ) {}
}

export class UpdateQuestionSuccess implements Action {
    readonly type = QuestionActionTypes.UPDATE_QUESTION_SUCCESS;
}

export class UpdateQuestionFailure implements Action {
    readonly type = QuestionActionTypes.UPDATE_QUESTION_FAILURE;
}

export class DeleteQuestion implements Action {
    readonly type = QuestionActionTypes.DELETE_QUESTION;
    constructor(
        public payload: {
            questionId: string;
        }
    ) {}
}

export class DeleteQuestionSuccess implements Action {
    readonly type = QuestionActionTypes.DELETE_QUESTION_SUCCESS;
}

export class DeleteQuestionFailure implements Action {
    readonly type = QuestionActionTypes.DELETE_QUESTION_FAILURE;
} */

export type QuestionActions = 
| GetQuestion
| GetQuestionSuccess
| GetQuestionFailure;
/* | AddQuestion
| AddQuestionSuccess
| AddQuestionFailure
| UpdateQuestion
| UpdateQuestionSuccess
| UpdateQuestionFailure
| DeleteQuestion
| DeleteQuestionSuccess
| DeleteQuestionFailure; */