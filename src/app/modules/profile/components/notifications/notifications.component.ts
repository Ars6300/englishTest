import { StorageService } from 'src/app/core/services/storage.service';
import { Component, OnInit } from '@angular/core';
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
export class NotificationsComponent implements OnInit {
  role: string = this.storage.getSessionItem('role') || '';

  constructor(
    private router: Router,
    private store: Store<State>,
    private storage: StorageService
  ) {}

  notifications: Notification[] = [
    {
      title: TEST_NOTIFICATION,
      assignedBy: ASSIGNED_ROLE,
    },
  ];

  ngOnInit() {}

  goToSelectLevel() {
    this.router.navigate([SELECT_LEVEL_PATH]);
  }
}
