import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Notification } from 'src/app/core/models/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  constructor(private router: Router) {}
  notifications: Notification[] = [
    {
      title: 'You have test assigned',
      assignedBy: 'HR',
      deadline: new Date().toLocaleDateString('en-UK'),
    },
  ];
  ngOnInit(): void {}

  goToSelectLevel() {
    this.router.navigate(['select-level']);
  }
}
