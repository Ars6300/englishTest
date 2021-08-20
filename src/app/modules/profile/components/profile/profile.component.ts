import { Component, OnInit } from '@angular/core';
import { getUserRole } from 'src/app/redux/selectors/user.selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  getUserRole$ = this.store.select(getUserRole);
  tooltipPosition: TooltipPosition = 'after';
  ableToEditRoles = ['couch', 'administrator'];
  ableToUsersRoles = ['HR'];

  // isHR(role: any) {
  //   return role === 'HR'
  // }
  // isAdmin(role: any) {
  //   return role === 'administrator'
  // }
  // isCouch(role: any) {
  //   return role === 'couch'
  // }

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
