import { getProfileResults } from './../../../../redux/selectors/profile-results.selectors';
import { ProfileResult } from './../../../../core/models/profile-result.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/redux/models/state.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results$: Observable<ProfileResult[]> = this.store.select(getProfileResults);
  selectedResult: ProfileResult | undefined;

  constructor(private store: Store<AppState>) {}

  selectResult(data: ProfileResult) {
    this.selectedResult = data;
  }

  ngOnInit(): void {}
}
