import { AuthState } from './auth.model';
import { GetAllQuestionsState } from './get-all-questions.state.model';
import { ProfileResultsState } from './profile-results.state.model';
import { QuestionsState } from './questions.state.model';

export interface AppState {
  questions: QuestionsState;
  'profile-results': ProfileResultsState;
  allQuestions: GetAllQuestionsState;
  auth: AuthState;
}
