import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { QuestionsState } from 'src/app/redux/models/questions.state.model';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';

export const QUESTIONS_LOCALSTORAGE_KEY = 'grammar-questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsSyncService {
  isInit = false;

  constructor(private store$: Store<QuestionsState>) {}

  init() {
    if (this.isInit) {
      return;
    }

    this.isInit = true;

    this.store$
      .pipe(
        select(getQuestions),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(QUESTIONS_LOCALSTORAGE_KEY, JSON.stringify(state));
      });
  }
}
