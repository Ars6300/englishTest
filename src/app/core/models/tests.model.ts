import { Level } from 'src/app/core/models/level.model';
export interface TestsGet {
  id: string;
  startTime: string;
  endTime: string;
  englishLevel: Level;
  testQuestionSet: [];
}