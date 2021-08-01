import { Level } from 'src/app/core/models/level.model'
import { QuestionType } from 'src/app/core/models/test.model'

export interface TestsGet {
  id: string;
  startTime: string;
  endTime: string;
  englishLevel: Level;
  testQuestionSet: [];
}
