import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITestDone } from 'src/app/core/models/tests.model';
import { ErrorService } from 'src/app/core/services/error.service';
import { TestsDoneState } from 'src/app/redux/models/users-admin.state.model';
import { getTestsDone } from 'src/app/redux/selectors/users-admin.selectors';
import { UsersAdminService } from '../users-admin.service';

export class TestsDoneModel {
  email: string = '';
  firstName: string = '';
  id: string = '';
  lastName: string = '';
  role: string = '';
  level: string = '';
  coach?: string = '';
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
    'coach',
    'assignCheck',
  ];
  dataSource: TestsDoneModel[] = [];

  testsDoneModel: TestsDoneModel = new TestsDoneModel();
  @ViewChild(MatTable) table!: MatTable<TestsDoneModel>;

  openEdit = false;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  coachFormValue!: string;

  constructor(
    private usersAdminService: UsersAdminService,
    private testsDoneStore: Store<TestsDoneState>,
    private formBuilder: FormBuilder,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.testsDone$ = this.testsDoneStore.select(getTestsDone);

    this.usersAdminService.getTestsDone().subscribe((testsDone$) => {
      this.testsDoneList = testsDone$;
      this.dataSource = [...this.testsDoneList];
    });

    this.formValue = this.formBuilder.group({
      role: [''],
      level: [''],
      coach: [''],
    });
  }

  onPostAssignCheck() {
    this.testsDoneModel.role = this.formValue.value.role;
    this.testsDoneModel.level = this.formValue.value.level;
    this.testsDoneModel.coach = this.formValue.value.coach;

    this.usersAdminService.postAssignCheck(this.testsDoneModel).subscribe(
      (res: TestsDoneModel) => {
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.closeModal();
        this.coachFormValue = '';
      },
      (error) => {
        this.errorService.logError(error || 'Something went wrong');
      }
    );
  }

  onAssignCheck(test: TestsDoneModel) {
    this.showAdd = false;
    this.showUpdate = true;

    this.testsDoneModel.id = test.id;
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
    this.coachFormValue = '';
  }

  getOption(event: any) {
    this.coachFormValue = event.target.value;
  }
}
