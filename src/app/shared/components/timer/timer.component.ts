import { getTestStartTime } from './../../../redux/selectors/tests.selectors';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TestDataState } from 'src/app/redux/models/tests.state.model';
import { take } from 'rxjs/operators';
import { getTimeLeft } from '../../utils/utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() timeEnded = new EventEmitter();
  time!: number;
  timeSubscription!: Subscription;
  constructor(private store: Store<TestDataState>) {}

  starttime$ = this.store.select(getTestStartTime);

  ngOnInit(): void {
    this.timeSubscription = this.starttime$
      .pipe(take(1))
      .subscribe((startTime) => (this.time = getTimeLeft(startTime)));
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  timerEvent(event: any) {
    if (event.action === 'done') {
      this.timeEnded.emit();
    }
  }
}
