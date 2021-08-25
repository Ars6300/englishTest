import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Hr } from 'src/app/core/models/hr.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersHrService { 
  
  header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.auth.token[1]}`
    );
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  getUsers(): Observable<Hr[]> {
   
    return this.http.get<Hr[]>(
      `${environment.api_URL}/api/users?Page=0&Skip=10&Take=40`,
      { headers: this.header }
    );
  }

  assignTest(userId: string, level: string) {

    return this.http
      .put<any>(
        `${environment.api_URL}/api/test/assignToUser`,
        { userId, level },
        { headers: this.header }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  /* assignTestOfUser(id: string, level: string) {
    return this.http
      .post<any>(
        `${environment.api_URL}/api/User/sendEmail?userId=${id}&message=${level}`,
        {}
      )
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  } */

  allowStartTest(userId: string) {
   
    return this.http
      .put(`${environment.api_URL}/api/users/allowStart?userId=${userId}`, {
        headers: this.header,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
// https://localhost:44356/api/users/allowStart?userId=EC05634A-5C36-4981-92A7-5E5DDFAEA306
