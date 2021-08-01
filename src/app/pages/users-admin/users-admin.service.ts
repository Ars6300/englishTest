import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITestDone } from 'src/app/core/models/tests.model';
import { TESTS_DONE_MOCK } from 'src/app/redux/reducers/users-admin.reducers';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

  constructor(private http: HttpClient) {}

  getTestsDone(): Observable<ITestDone[]> {
    return of(TESTS_DONE_MOCK);
  }
}