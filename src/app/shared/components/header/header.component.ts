import { getTestId } from './../../../redux/selectors/tests.selectors';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { completeTest } from 'src/app/redux/actions/tests.actions';
import { TestDataState } from 'src/app/redux/models/tests.state.model';
import { getTestStartTime } from 'src/app/redux/selectors/tests.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  url: string = '';
  testId$ = this.store.select(getTestId);
  startTime$ = this.store.select(getTestStartTime).pipe(take(1));
  testIdSubscription!: Subscription;

  constructor(private router: Router, private store: Store<TestDataState>) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.url = event.url.split('/')[1];
      });
  }

  isTest() {
    if (
      this.url.includes('grammar') ||
      this.url.includes('listening') ||
      this.url.includes('speaking') ||
      this.url.includes('writing')
    ) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {}
  completeTest() {
    this.testIdSubscription = this.testId$.pipe(take(1)).subscribe((testId) => {
      this.store.dispatch(completeTest({ testId: testId }));
    });
  }
  onCompleteClick() {
    this.completeTest();
  }

  timerEnded() {
    this.completeTest();
  }
}
