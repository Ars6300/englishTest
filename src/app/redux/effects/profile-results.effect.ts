import { ProfileResult } from './../../core/models/profile-result.model';
import { ProfileResultsService } from './../../core/services/results/profile-results.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {
  fetchProfileResults,
  loadProfileResults,
} from './../actions/profile-results.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProfileResultsEffects {
  loadResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProfileResults),
      mergeMap((action) =>
        this.profileResultsService.getAllResults(action.userId).pipe(
          map((results) => {
            return loadProfileResults({ payload: results as ProfileResult[] });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private profileResultsService: ProfileResultsService
  ) {}
}
