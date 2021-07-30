import { Component, OnInit } from '@angular/core';
import { getUserRole } from 'src/app/redux/selectors/user.selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  getUserRole$ = this.store.select(getUserRole);

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

  constructor(private store: Store<State>) {
    console.log(this.store.select(getUserRole));
  }

  ngOnInit(): void {
    console.log();
  }
}
