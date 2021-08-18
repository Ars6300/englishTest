import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hr } from 'src/app/core/models/hr.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersHrService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Hr[]> {
    return this.http.get<Hr[]>(`${environment.api_URL}/api/users?Page=0&Skip=10&Take=40`);
  }

  assignTest(userId: string, hrId: string, level: string) {
    return this.http
      .put<any>(
        `${environment.api_URL}/api/test/assignToUser`,
        {userId, hrId, level}
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

  allowStartTest(userId: string){
    console.log(userId);
    return this.http.put(`${environment.api_URL}/api/user/allowStart?userId=${userId}`, {}).subscribe(res => {
      console.log(res);
    })
  }
}
