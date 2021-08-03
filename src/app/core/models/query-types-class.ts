import { QuestionHandler } from './questions-handler.model';
import { QuestionType } from './test.model';

export class GrammarQuestion extends QuestionHandler {
  public handle(request: string): string {
    if (request === QuestionType.Grammar) {
      return QuestionType.Grammar;
    }
    return super.handle(request);
  }
}

export class ListeningQuestion extends QuestionHandler {
  public handle(request: string): string {
    if (request === QuestionType.Listening) {
      return QuestionType.Listening;
    }
    return super.handle(request);
  }
}

export class SpeakingQuestion extends QuestionHandler {
  public handle(request: string): string {
    if (request === QuestionType.Speaking) {
      return QuestionType.Speaking;
    }
    return super.handle(request);
  }
}

export class WritingQuestion extends QuestionHandler {
  public handle(request: string): string {
    if (request === QuestionType.Writing) {
      return QuestionType.Writing;
    }
    return super.handle(request);
  }
}
