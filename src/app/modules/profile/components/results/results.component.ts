import {
  fetchProfileResults,
  loadProfileResults,
} from './../../../../redux/actions/profile-results.actions';
import { getProfileResults } from './../../../../redux/selectors/profile-results.selectors';
import { ProfileResult } from './../../../../core/models/profile-result.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/redux/models/state.model';
import { getUserId } from 'src/app/redux/selectors/user.selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results$: Observable<ProfileResult[]> = this.store.select(getProfileResults);
  results!: ProfileResult[];
  opened!: boolean;
  userId$ = this.store.select(getUserId);
  selectedResult: ProfileResult | undefined;
  userIdSubscription!: Subscription;
  resultsSubscription!: Subscription;
  userId!: string | null;
  constructor(private store: Store<AppState>) {}

  selectResult(data: ProfileResult) {
    this.selectedResult = data;
  }

  ngOnInit(): void {
    this.userIdSubscription = this.userId$.pipe(take(1)).subscribe((id) => {
      this.store.dispatch(fetchProfileResults({ userId: id }));
    });
    this.resultsSubscription = this.results$.subscribe((res) => {
      res.length ? (this.opened = true) : (this.opened = false);
      this.results = res;
    });
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
    if (this.resultsSubscription) {
      this.resultsSubscription.unsubscribe();
    }
  }
}
