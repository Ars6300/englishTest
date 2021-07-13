import { Level } from './level.model';
export interface Questions {
  questionId: string;
  answers: [];
  text: string;
  type: string;
  audioLink: string;
  level: Level;
}

export interface Answer {
  questionId: string;
  answerId: string;
}
