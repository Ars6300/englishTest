import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GRAMMAR_PATH } from 'src/app/app-routing.constants';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { TITLE_LEVELS } from '../../select-level.constants';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getUserId } from 'src/app/redux/selectors/user.selectors';
import * as TestsActions from 'src/app/redux/actions/tests.actions';
import { interval } from 'rxjs';
import { switchMap, take, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent implements OnInit {
  constructor(
    private router: Router,
    private testsService: TestsService,
    private store: Store<State>
  ) {}

  title = TITLE_LEVELS;
  buttons = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermidiate',
    'B2 Upper Int.',
    'C1 Advanced',
    'C2 Proficiency',
  ];

  getUserId$ = this.store.select(getUserId);
  level = '';

  ngOnInit(): void {}

  selectLevel(event: any) {
    this.level = event.target.innerText;
  }

  startTest() {
    this.level = this.level.split(' ')[0];

    this.store.dispatch(
      TestsActions.getTestsData({
        userId: setTimeout(() => this.getUserId$, 500),
        engLevel: this.level.toLocaleLowerCase(),
      })
    );
  }
}
