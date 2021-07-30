export interface TestsGet {
  id: string;
  startTime: string;
  endTime: string;
  englishLevel: string;
  testQuestionSet: [
    {
      id: string;
      type: number;
      audio: {
        id: string;
      };
      question: {
        id: string;
        text: string;
      };
      answersList: [
        {
          id: string;
          text: string;
        }
      ];
    }
  ];
}
