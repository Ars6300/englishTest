import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Notification } from 'src/app/core/models/notification.model';
import {
  getUserName,
  getUserRole,
} from 'src/app/redux/selectors/user.selectors';
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
export class NotificationsComponent implements OnInit {
  getUserRole$ = this.store.select(getUserRole);

  constructor(private router: Router, private store: Store<State>) {}

  notifications: Notification[] = [
    {
      title: TEST_NOTIFICATION,
      assignedBy: ASSIGNED_ROLE
    },
  ];

  ngOnInit() {}

  goToSelectLevel() {
    this.router.navigate([SELECT_LEVEL_PATH]);
  }
}
