export class CoachTestModel {
  'testId': string;
  'examDate': string;
  'totalTimeMinutes': number;
  'englishLevel': string;
  'status': number;
  'grammarMark': number;
  'auditionMark': number;
  'writingMark': number;
  'speakingMark': number;
  'totalMark': number;
  'userAnswerSet': [
    {
      type: number;
      audioId: null;
      questionId: string;
      questionText: string;
      userAnswer: string;
    }
  ];
}
