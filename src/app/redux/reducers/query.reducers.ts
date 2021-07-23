import { grammar } from '../../modules/questions-block/questions.module';
import { listening } from '../../modules/listening/listening.module';
import { writing } from '../../modules/writing/writing.module';
import { speaking } from '../../modules/speaking/speaking.module';
import {
  GrammarQuestion,
  ListeningQuestion,
  SpeakingQuestion,
  WritingQuestion,
} from 'src/app/core/models/query-types-class';

export type Questions =
  | GrammarQuestion
  | ListeningQuestion
  | WritingQuestion
  | SpeakingQuestion;

export const queries = [grammar, listening, writing, speaking].reduce(
  (previous: Questions, current: Questions): Questions => {
    return <Questions>previous.setNext(current);
  }
);
