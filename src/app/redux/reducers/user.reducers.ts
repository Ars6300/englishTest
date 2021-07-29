import { User } from 'src/app/core/models/user.model'
import { createReducer, on } from '@ngrx/store';
import * as AuthPageActions from 'src/app/redux/actions/user.actions'

export const authFeatureKey = 'auth'

export interface AuthState {
  currentUser: User,
  errors?: {
    loginError?: string | null,
  },
  isLoading: boolean
}

const initialState: AuthState = {
  currentUser: {
    token: '',
    user: {
      firstName: '',
      lastName: '',
      email: '',
      id: '',
      role: ''
    }   
  },
  errors: {
    loginError: ''
  },
  isLoading: false
}



export const authReducer = createReducer<AuthState>(
  initialState,
  on(
    AuthPageActions.loginUser,
    (state): AuthState => {
      return {
        ...state,
        isLoading: true
      }
    }
  ),
  on(
    AuthPageActions.loginUserSuccess,
    (state, action): AuthState => {
      return {
        ...state,
        currentUser: {
          token: action.user.token,
          user: {
            firstName: action.user.user.firstName,
            lastName: action.user.user.lastName,
            email: action.user.user.email,
            id: action.user.user.id,
            role: action.user.user.role
          }
        },
        errors: {
          ...state.errors, loginError: ''
        },
        isLoading: false
      }
    }
  ),
  on(
    AuthPageActions.loginUserFailure,
    (state, action): AuthState => {
      return {
        ...state,
        errors: {
          ...state.errors,
          loginError: action.error
        },
        isLoading: false
      }
    }
  ),
  on(
    AuthPageActions.logoutUser,
    (state): AuthState => {
      return {
        ...state,
        currentUser: {
          token: '',
          user: {
            firstName: '',
            lastName: '',
            email: '',
            id: '',
            role: '',
          }
        },
        errors: { ...state.errors, loginError: '' },
        isLoading: false,
      };
    }
  ),
)