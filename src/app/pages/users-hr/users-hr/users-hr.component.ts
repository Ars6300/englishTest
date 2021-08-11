import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Hr } from 'src/app/core/models/hr.model';
import { ErrorService } from 'src/app/core/services/error.service';
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
  users$: Hr[] | undefined;

  usersList: UserModel[] = [];
  usersData: UserModel[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'role', 'assignTest'];
  dataSource: UserModel[] = [];

  userModel: UserModel = new UserModel();
  @ViewChild(MatTable) table!: MatTable<UserModel>;

  openEdit = false;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private usersHrService: UsersHrService,
    private formBuilder: FormBuilder,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.usersHrService.getUsers().subscribe((users$) => {
      console.log(users$);
      
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

  postAssignTest() {
    this.usersHrService.assignTest(this.userModel.id).subscribe(
      (res: any) => {
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.closeModal();
      },
      (error) => {
        this.errorService.logError(error || 'Something went wrong');
      }
    );
  }

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
  onAssignTestAgain(user: UserModel){
    console.log(user.id);
    
    this.usersHrService.allowStartTest(user.id)
  }
}
