import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GRAMMAR_PATH } from 'src/app/app-routing.constants';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { TITLE_LEVELS } from '../select-level.constants';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { getUserId } from 'src/app/redux/selectors/user.selectors';
import * as TestsActions from 'src/app/redux/actions/tests.actions';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent implements OnInit {
  constructor(private store: Store<State>) {}
  userIdSubscription!: Subscription;
  title = TITLE_LEVELS;
  SELECT_LEVEL_BUTTONS = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper Int.',
    'C1 Advanced',
    'C2 Proficiency',
  ];

  getUserId$ = this.store.select(getUserId);
  level = '';
  initId: string | null = '';
  ngOnInit(): void {
    this.userIdSubscription = this.getUserId$
      .pipe(take(1))
      .subscribe((id) => (this.initId = id));
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
  }

  selectLevel(event: any) {
    this.level = event.target.innerText;
  }

  startTest() {
    this.level = this.level.split(' ')[0];
    this.store.dispatch(
      TestsActions.getTestsData({
        englishLevel: this.level.toLocaleUpperCase()
      })
    );
  }
}
