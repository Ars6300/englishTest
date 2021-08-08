import { User } from 'src/app/core/models/user.model';

export interface AuthState {
  currentUser: User;
  errors?: {
    loginError?: string | null;
  };
  isLoading: boolean;
}
