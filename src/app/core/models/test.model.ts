export enum QuestionType {
    Grammar = '0',
    Listening = '1',
    Writing = '2',
    Speaking = '3',
}

export interface Tests {
  type: QuestionType;
  text: string;
  answers: [{ id: string; answer: string }];
}
