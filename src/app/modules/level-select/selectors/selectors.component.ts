import { TestsService } from 'src/app/core/services/tests/tests.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TITLE_LEVELS } from '../select-level.constants';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { getUserId } from 'src/app/redux/selectors/user.selectors';
import * as TestsActions from 'src/app/redux/actions/tests.actions';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/core/services/storage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<State>,
    private storage: StorageService,
    private testService: TestsService
  ) {}
  userIdSubscription!: Subscription;
  lastTestTimeSubscription!: Subscription;
  title = TITLE_LEVELS;
  SELECT_LEVEL_BUTTONS = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper Int.',
    'C1 Advanced',
    'C2 Proficiency',
  ];
  allowStartTest!: boolean;
  nextTestTime!: any;
  getUserId$ = this.store.select(getUserId);
  level = '';
  initId: string | null = '';

  ngOnInit(): void {
    this.userIdSubscription = this.getUserId$
      .pipe(take(1))
      .subscribe((id) => (this.initId = id));
    this.lastTestTimeSubscription = this.testService
      .getLastTestTime()
      .subscribe((data: any) => {
        console.log(data);
        this.allowStartTest = data.allowStartTest;
        this.nextTestTime = this.addDays(data.lastTestTime, 1);
      });
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
    if (this.lastTestTimeSubscription) {
      this.lastTestTimeSubscription.unsubscribe();
    }
  }

  addDays(date: string, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  selectLevel(event: any) {
    this.level = event.target.innerText;
  }

  startTest() {
    this.level = this.level.split(' ')[0];
    this.storage.setLocalItem('audioTryCount', environment.AUDIO_ATTEMPTS);
    this.store.dispatch(
      TestsActions.getTestsData({
        englishLevel: this.level.toLocaleUpperCase(),
      })
    );
  }

  refreshPage(): void {
    window.location.reload();
  }
}
