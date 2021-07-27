import { ProfileResultsState } from './profile-results.state.model';
import { QuestionsState } from './questions.state.model';

export interface AppState {
  questions: QuestionsState;
  'profile-results': ProfileResultsState;
}
