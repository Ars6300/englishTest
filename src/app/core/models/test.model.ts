export enum QuestionType {
    Grammar = 1,
    Listening = 2,
    Writing = 3,
    Speaking = 4,
}

export interface Tests {
  type: number;
  text: string;
  answers: [{ id: string; answer: string }];
}