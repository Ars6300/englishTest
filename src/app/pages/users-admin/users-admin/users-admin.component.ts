import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Level } from 'src/app/core/models/level.model';
import { ITestDone } from 'src/app/core/models/tests.model';
import { TestsDoneState } from 'src/app/redux/models/users-admin.state.model';
import { getTestsDone } from 'src/app/redux/selectors/users-admin.selectors';
import { UsersAdminService } from '../users-admin.service';

export class TestsDoneModel {
  email: string = '';
  firstName: string = '';
  id: string = '';
  lastName: string = '';
  role: string = '';
  level: string = ''
}

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.scss'],
  providers: [UsersAdminService],
})
export class UsersAdminComponent implements OnInit {
  testsDone$: Observable<ITestDone[]> | undefined;

  testsDoneList: TestsDoneModel[] = [];
  testsDoneData: TestsDoneModel[] = [];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'role',
    'level',
    'email',
    'assignCheck',
  ];
  dataSource: TestsDoneModel[] = [];

  testsDoneModel: TestsDoneModel = new TestsDoneModel();
  @ViewChild(MatTable) table!: MatTable<TestsDoneModel>;

  openEdit = false;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private usersAdminService: UsersAdminService,
    private testsDoneStore: Store<TestsDoneState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.testsDone$ = this.testsDoneStore.select(getTestsDone);

    this.usersAdminService.getTestsDone().subscribe((testsDone$) => {
      this.testsDoneList = testsDone$;
      this.dataSource = [...this.testsDoneList];
    });

    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      role: [''],
      level: [''],
    });
  }

  postAssignCheck() {}

  onAssignCheck(test: TestsDoneModel) {
    this.testsDoneModel.id = test.id;
    this.formValue.controls['email'].setValue(test.email);
    this.formValue.controls['firstName'].setValue(test.firstName);
    this.formValue.controls['lastName'].setValue(test.lastName);
    this.formValue.controls['role'].setValue(test.role);
    this.formValue.controls['level'].setValue(test.level);
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
