import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITestDone } from 'src/app/core/models/tests.model';
import { TESTS_DONE_MOCK } from 'src/app/redux/reducers/users-admin.reducers';
import { TestsDoneModel } from './users-admin/users-admin.component';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminService {

  constructor(private http: HttpClient) {}

  getTestsDone(): Observable<ITestDone[]> {
    return of(TESTS_DONE_MOCK);
  }

  postAssignCheck(data: TestsDoneModel) {
    return this.http.post<any>('srcenvironmentsenvironment.ts', data).pipe(
      map((res: any) => {
        console.log(res)
        return res;
      })
    );
  }
}