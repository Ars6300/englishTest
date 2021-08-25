import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Admin } from 'src/app/core/models/admin.model';
import { Hr } from 'src/app/core/models/hr.model';
import { ErrorService } from 'src/app/core/services/error.service';

import { UsersAdminService } from '../users-admin.service';

export class TestsDoneModel {
  testId: string = '';
  examDate: string = '';
  userId: string = '';
  role: string = '';
  level: string = '';
  couchId?: string = '';
}

export class UserModelAdmin {
  email: string = '';
  firstName: string = '';
  id: string = '';
  lastName: string = '';
  role: string = '';
}

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.scss'],
  providers: [UsersAdminService],
})
export class UsersAdminComponent implements OnInit, OnDestroy {
  testsDone$: Observable<Admin[]> | undefined;

  testsDoneList: TestsDoneModel[] = [];
  testsDoneData: TestsDoneModel[] = [];

  users$: Hr[] | undefined;

  couchId: string = '';
  usersList: UserModelAdmin[] = [];
  
  displayedColumns: string[] = [
    'date',
    'role',
    'level',
    'coach',
    'assignCheck',
  ];
  dataSource: TestsDoneModel[] = [];
  dataUsers: UserModelAdmin[] = [];
  
  testsDoneModel: TestsDoneModel = new TestsDoneModel();
  userModel: UserModelAdmin = new UserModelAdmin();

  
  @ViewChild(MatTable) table!: MatTable<TestsDoneModel>;
  
  userListMatTabDataSource = new MatTableDataSource<TestsDoneModel>(
    this.dataSource
    );
    
    openEdit = false;
    formValue!: FormGroup;
    showAdd!: boolean;
    showUpdate!: boolean;
    unassignedTestsSubscription!: Subscription;
    usersSubscription!: Subscription;
    
    coachFormValue!: string;
    
    constructor(
      private usersAdminService: UsersAdminService,
      private formBuilder: FormBuilder,
      private errorService: ErrorService
      ) {}
      
      ngOnInit(): void {
        this.unassignedTestsSubscription = this.usersAdminService
      .getUnassignedTests()
      .subscribe((testsDone$) => {
        this.testsDoneList = testsDone$;
        this.dataSource = [...this.testsDoneList];
        this.userListMatTabDataSource.data = this.dataSource;
        console.log(this.dataSource);
        console.log(this.testsDoneList);
      });

    this.usersAdminService.getUsers().subscribe((users$) => {
      this.usersList = users$;
      this.dataUsers = [...this.usersList];
    });

    this.formValue = this.formBuilder.group({
      role: [''],
      level: [''],
      coach: [''],
    });
  }

  ngOnDestroy(): void {
    if (this.unassignedTestsSubscription) {
      this.unassignedTestsSubscription.unsubscribe();
    }
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

  onPostAssignCheck(): any {
    this.testsDoneModel.role = this.formValue.value.role;
    this.testsDoneModel.level = this.formValue.value.level;
    this.testsDoneModel.couchId = this.formValue.value.coach;

    this.usersAdminService
      .postAssignCheck(this.testsDoneModel.testId, this.couchId)
      .subscribe((res: any) => {
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.closeModal();
        this.coachFormValue = '';
      });

    this.removeItem(this.testsDoneModel.testId);
  }

  onAssignCheck(test: TestsDoneModel) {
    this.showAdd = false;
    this.showUpdate = true;

    this.testsDoneModel.userId = test.userId;
    this.testsDoneModel.testId = test.testId;

    this.formValue.controls['role'].setValue(test.role);
    this.formValue.controls['level'].setValue(test.level);
    this.formValue.controls['coach'].setValue(this.coachFormValue);
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

  getOption(event: any): any {
    this.coachFormValue = event.target.value;
    for (let i = 0; i < this.dataUsers.length; i++) {
      if (this.coachFormValue === this.dataUsers[i].lastName) {
        this.couchId = this.dataUsers[i].id;
      }
    }
  }

  removeItem(id: string) {
    this.dataSource = this.dataSource.filter((test) => test.testId !== id);
    this.userListMatTabDataSource.data = this.dataSource;
    return this.userListMatTabDataSource.data;
  }

  applyFilter(event: any) {
    const filterValue = event.target.value;
    this.userListMatTabDataSource.filter = filterValue.trim().toLowerCase();
  }
}
