export interface Question {
  tests: [
    {
      userAnswerId: string;
      type: number;
      audioId: string;
      question: {
        questionId: string;
        text: string;
      };
      answersList:[];
    }
  ];
}
