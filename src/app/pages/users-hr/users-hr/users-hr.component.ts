import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { UsersState } from 'src/app/redux/models/users-hr.state.model';
import { getUsers } from 'src/app/redux/selectors/users-hr.selectors';
import { UsersHrService } from '../users-hr.service';

export class UserModel {
  email: string = '';
  firstName: string = '';
  id: string = '';
  lastName: string = '';
  role: string = '';
}

@Component({
  selector: 'app-users-hr',
  templateUrl: './users-hr.component.html',
  styleUrls: ['./users-hr.component.scss'],
  providers: [UsersHrService],
})
export class UsersHrComponent implements OnInit {
  users$: Observable<IUser[]> | undefined;

  usersList: UserModel[] = [];
  usersData: UserModel[] = [];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'role',
    'assignTest',
  ];
  dataSource: UserModel[] = [];

  userModel: UserModel = new UserModel();
  @ViewChild(MatTable) table!: MatTable<UserModel>;

  openEdit = false;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private usersHrService: UsersHrService,
    private usersStore: Store<UsersState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.users$ = this.usersStore.select(getUsers);

    this.usersHrService.getUsers().subscribe((users$) => {
      this.usersList = users$;
      this.dataSource = [...this.usersList];
    });

    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      role: [''],
    });
  }

  postAssignTest() {}

  onAssignTest(user: UserModel) {
    this.userModel.id = user.id;
    this.formValue.controls['email'].setValue(user.email);
    this.formValue.controls['firstName'].setValue(user.firstName);
    this.formValue.controls['lastName'].setValue(user.lastName);
    this.formValue.controls['role'].setValue(user.role);
  }

  openModal() {
    let modal = document.getElementById('modal');
    modal?.classList.remove('modal-close');
    modal?.classList.add('modal-open');
  }

  closeModal() {
    let modal = document.getElementById('modal');
    modal?.classList.remove('modal-open');
    modal?.classList.add('modal-close');
    this.formValue.reset();
  }
}
