import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/models/user.model';

export enum UsersActionsList {
  LoadUsers = '[Users Page] Load Users',
}

export const LoadUsers = createAction(
  UsersActionsList.LoadUsers,
  props<{ users: IUser }>()
);