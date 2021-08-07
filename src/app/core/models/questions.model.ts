import { Level } from './level.model';
export interface Question {
  userAnswerId: string;
  answersList: [
    {
      answerId: string
      text: string 
    },
    {
      answerId: string
      text: string 
    },
    {
      answerId: string
      text: string 
    },
    {
      answerId: string
      text: string 
    },
  ];
  question: {
    questionId: string;
    text: string;
  };
  type: number;
  audioId: string;
  level: Level;
}

export interface Answer {
  questionId: string;
  id: string;
}
