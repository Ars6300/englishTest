import { Level } from 'src/app/core/models/level.model';
export interface TestsGet {
  id: string;
  startTime: string;
  endTime: string;
  englishLevel: Level;
  couchId: string,
  userAnswerSet: [];
}
export interface ITestDone {
  id: string;
  email: string;
  level: Level;
  firstName: string;
  lastName: string;
  role: string;
  coach?: string;
}
