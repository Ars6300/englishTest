import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersActionsList } from '../actions/users-hr.actions';
import { UsersHrService } from 'src/app/pages/users-hr/users-hr.service';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActionsList.LoadUsers),
      mergeMap(() =>
        this.usersHrService.getUsers().pipe(
          map((users) => ({
            type: UsersActionsList.LoadUsers,
            payload: users,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private usersHrService: UsersHrService,
    private actions$: Actions
  ) {}
}