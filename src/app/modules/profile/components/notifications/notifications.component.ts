import { Subscription } from 'rxjs';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Notification } from 'src/app/core/models/notification.model';
import { getUserRole } from 'src/app/redux/selectors/user.selectors';
import {
  ASSIGNED_ROLE,
  TEST_NOTIFICATION,
} from '../../profile-routing.constants';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { SELECT_LEVEL_PATH } from 'src/app/app-routing.constants';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  role: string = this.storage.getSessionItem('role') || '';
  assignedLevel!: string | null;
  levelSubscription!: Subscription;
  constructor(
    private router: Router,
    private store: Store<State>,
    private storage: StorageService,
    private testService: TestsService
  ) {}

  notifications: Notification[] = [
    {
      title: TEST_NOTIFICATION,
      assignedBy: ASSIGNED_ROLE,
    },
  ];

  ngOnInit() {
    this.levelSubscription = this.testService
      .getAssignedTest()
      .subscribe((answer: any) => {
        this.assignedLevel = answer.level;
      });
  }

  ngOnDestroy(): void {
    if (this.levelSubscription) {
      this.levelSubscription.unsubscribe();
    }
  }

  goToSelectLevel() {
    this.router.navigate([SELECT_LEVEL_PATH]);
  }
}
