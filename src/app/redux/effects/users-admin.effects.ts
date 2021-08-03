import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersAdminService } from 'src/app/pages/users-admin/users-admin.service';
import { TestsDoneActionsList } from '../actions/users-admin.actions';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestsDoneActionsList.LoadTestsDone),
      mergeMap(() =>
        this.usersAdminService.getTestsDone().pipe(
          map((testsDone) => ({
            type: TestsDoneActionsList.LoadTestsDone,
            payload: testsDone,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private usersAdminService: UsersAdminService,
    private actions$: Actions
  ) {}
}