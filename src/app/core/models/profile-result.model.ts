import { Level } from './level.model';
export interface ProfileResult {
  examDate: Date;
  level: Level;
  status: string;
  grammarMark: number;
  auditionMark: number;
  writingMark: number;
  speakingMark: number;
  totalMark: number;
}
