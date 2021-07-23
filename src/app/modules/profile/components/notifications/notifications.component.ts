import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Notification } from 'src/app/core/models/notification.model';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserInfoService,
  ) {}

  notifications: Notification[] = [
    {
      title: 'You have test assigned',
      assignedBy: 'HR',
      deadline: new Date().toLocaleDateString('en-UK'),
    },
  ];

  ngOnInit() { 
    // this.userService.getData().subscribe(res => {
    //   console.log(res)
    // })
  }


  goToSelectLevel() {
    this.router.navigate(['select-level']);
  }
}
