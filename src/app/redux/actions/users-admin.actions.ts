import { createAction, props } from '@ngrx/store';
import { ITestDone } from 'src/app/core/models/tests.model';

export enum TestsDoneActionsList {
  LoadTestsDone = '[Tests Done Page] Load Tests Done',
}

export const LoadTestsDone = createAction(
  TestsDoneActionsList.LoadTestsDone,
  props<{ users: ITestDone }>()
);