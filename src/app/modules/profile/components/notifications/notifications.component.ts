import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToSelectLevel(){
    this.router.navigate(['select-level'])
  }

}
