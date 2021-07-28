import { Level } from './level.model';
export interface ProfileResult {
  date: Date;
  level: Level;
  status: string;
  grammarScore: number;
  listeningScore: number;
  writingScore: number;
  speakingScore: number;
  totalScore: number;
}
