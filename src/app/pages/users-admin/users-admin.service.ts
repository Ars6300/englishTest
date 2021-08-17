import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from 'src/app/core/models/admin.model';
import { Hr } from 'src/app/core/models/hr.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersAdminService {
  constructor(private http: HttpClient) {}

  getUnassignedTests(): Observable<Admin[]> {
    return this.http.get<Admin[]>(
      `${environment.api_URL}/api/test/unassignedToCouch`
    );
  }

  getUsers(): Observable<Hr[]> {
    return this.http.get<Hr[]>(
      `${environment.api_URL}/api/users?Page=0&Skip=10&Take=10&Role=couch`
    );
  }

  postAssignCheck(testId: string, couchId: string) {
    return this.http
      .put<any>(`${environment.api_URL}/api/test/assignToCouch?TestId`, {
        testId,
        couchId,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
