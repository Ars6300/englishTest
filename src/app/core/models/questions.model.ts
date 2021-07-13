export interface Questions {
  userId: string;
  role: string;
  text: string;
  questionId: string;
  answerId: string;
  type: string;
  levelId: 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';
  // level: "beginner" | "elementary" | "intermediate" | "upperintermediate" | "advanced" | "proficiency"
}

export interface Answers {
  questionId: string;
  answerId: string;
  text: string;
  isCorrect: boolean;
  incorrect: [];
}
