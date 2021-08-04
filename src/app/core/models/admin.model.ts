import { Level } from './level.model';

export interface Admin {
  testId: string;
  userId: string;
  examDate: string;
  level: Level;
  role: string;
  coach?: string;
}
