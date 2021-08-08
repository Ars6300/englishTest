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
    return this.http.get<Hr[]>(`${environment.api_URL}/api/User/GetAllUsers`);
  }

  assignTest(id: string, level: string) {
    return this.http
      .put<any>(
        `${environment.api_URL}/assignUser?UserId=${id}&Level=${level}`,
        {}
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  assignTestOfUser(id: string, level: string) {
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
  }
}
