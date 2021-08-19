import { User } from 'src/app/core/models/user.model';

/* NgRx */
import { createAction, props } from '@ngrx/store';

/* Login */

// export const loginUserSuccess = createAction(
//   '[Auth API] Login User Success',
//   props<{ user: User }>()
// );

export const loginUserFailure = createAction(
  '[Auth API] Login User Fail',
  props<{ error: string }>()
);

export const loginUser = createAction(
  '[Auth Page] Login User',
  props<{ email: string; password: string }>()
);

export const logoutUser = createAction('[Auth Page] Logout User');
