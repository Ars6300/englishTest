import { Level } from './level.model';
export interface Question {
  id: string;
  answers: string[];
  text: string;
  type: number;
  audioLink: string;
  level: Level;
}

export interface Answer {
  questionId: string;
  id: string;
}
