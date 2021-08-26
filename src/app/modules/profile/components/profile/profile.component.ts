import { Component, OnInit } from '@angular/core';
import { getUserRole } from 'src/app/redux/selectors/user.selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { TooltipPosition } from '@angular/material/tooltip';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  tooltipPosition: TooltipPosition = 'after';
  ableToEditRoles = ['couch'];
  ableToSeeUsers = ['hr'];
  userRole = ['user'];
  adminRole = ['admin'];
  assigmentsRoles = ['admin'];
  role: string = this.storage.getSessionItem('role') || '';

  constructor(private store: Store<State>, private storage: StorageService) {}

  ngOnInit(): void {
    console.log(this.role);
  }
}
