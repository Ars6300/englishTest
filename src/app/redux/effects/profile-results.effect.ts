import { Actions, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileResultsEffects {
  loadResults$ = createEffect(() => this.actions$.pipe{});

  constructor(private actions$: Actions) {}
}
