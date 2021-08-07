import { getTestStartTime } from './../../../redux/selectors/tests.selectors';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TestDataState } from 'src/app/redux/models/tests.state.model';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { getTimeLeft } from '../../utils/utils';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  time!: number;
  constructor(private store: Store<TestDataState>) {}

  starttime$ = this.store.select(getTestStartTime);

  ngOnInit(): void {
    this.starttime$
      .pipe(take(1))
      .subscribe((startTime) => (this.time = getTimeLeft(startTime)));
  }
}
