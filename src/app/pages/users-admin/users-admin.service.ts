import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Admin } from 'src/app/core/models/admin.model';
import { Hr } from 'src/app/core/models/hr.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersAdminService {
  
  header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.auth.token[1]}`
    );

  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  getUnassignedTests(): Observable<Admin[]> {
    
    return this.http.get<Admin[]>(
      `${environment.api_URL}/api/test/unassignedToCouch`,
      { headers: this.header }
    );
  }

  getUsers(): Observable<Hr[]> {
    
    return this.http.get<Hr[]>(
      `${environment.api_URL}/api/users?Page=0&Skip=10&Take=10&Role=couch`,
      { headers: this.header }
    );
  }

  postAssignCheck(testId: string, couchId: string) {
   
    return this.http
      .put<any>(
        `${environment.api_URL}/api/test/assignToCouch?TestId`,
        {
          testId,
          couchId,
        },
        { headers: this.header }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
