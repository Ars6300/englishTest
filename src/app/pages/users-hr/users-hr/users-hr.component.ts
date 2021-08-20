import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/models/app.state';
import { getUserId } from 'src/app/redux/selectors/user.selectors';
import { Hr } from 'src/app/core/models/hr.model';
import { UsersHrService } from '../users-hr.service';
import { take } from 'rxjs/operators';

export class UserModel {
  email: string = '';
  firstName: string = '';
  id: string = '';
  lastName: string = '';
  role: string = '';
  level: string = '';
}

@Component({
  selector: 'app-users-hr',
  templateUrl: './users-hr.component.html',
  styleUrls: ['./users-hr.component.scss'],
  providers: [UsersHrService],
})
export class UsersHrComponent implements OnInit {
  users$: Hr[] | undefined;

  getUserId$ = this.store.select(getUserId);
  userId: any;

  usersList: UserModel[] = [];
  usersData: UserModel[] = [];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'role',
    'level',
    'assignTest',
  ];
  dataSource: UserModel[] = [];

  levelData = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  userLevel: string = '';
  level: string = '';

  userModel: UserModel = new UserModel();
  @ViewChild(MatTable) table!: MatTable<UserModel>;

  userListMatTabDataSource = new MatTableDataSource<UserModel>(
    this.dataSource
  );

  openEdit = false;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private usersHrService: UsersHrService,
    private formBuilder: FormBuilder,
    private store: Store<State>,
  ) {}

  ngOnInit(): void {
    this.getUserId$.pipe(take(1)).subscribe((id) => (this.userId = id));

    this.usersHrService.getUsers().subscribe((users$) => {
      console.log(users$);
      
      this.usersList = users$;
      this.dataSource = [...this.usersList];
      this.userListMatTabDataSource.data = this.dataSource;
    });

    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      role: [''],
      level: [''],
    });
  }

  postAssignTest() {
    this.userModel.level = this.formValue.value.level;

    this.usersHrService
      .assignTest(this.userModel.id, this.userModel.level)
      .subscribe(
        (res: any) => {
          const ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.closeModal();
        }
      );

    /* this.usersHrService
      .assignTestOfUser(this.userModel.id, this.userModel.level)
      .subscribe(
        (res: any) => {
          const ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.closeModal();
        }
      ); */
  }

  onAssignTest(user: UserModel) {
    this.userModel.id = user.id;
    this.formValue.controls['email'].setValue(user.email);
    this.formValue.controls['firstName'].setValue(user.firstName);
    this.formValue.controls['lastName'].setValue(user.lastName);
    this.formValue.controls['role'].setValue(user.role);
    this.formValue.controls['level'].setValue(this.userLevel);
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
  onAssignTestAgain(user: UserModel){
    console.log(user);
    
    this.usersHrService.allowStartTest(user.id)
  }

  getOption(event: any): any {
    this.userLevel = event.target.value;
    for (let i = 0; i < this.levelData.length; i++) {
      this.level = this.levelData[i];
    }
  }

  applyFilter(event: any) {
    const filterValue = event.target.value;
    this.userListMatTabDataSource.filter = filterValue.trim().toLowerCase();
  }
}