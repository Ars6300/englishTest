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
    return this.http.get<Hr[]>(`${environment.api_URL}/api/user/`);
  }

  assignTest(id: string) {
    return this.http
      .post<any>(`${environment.api_URL}/assign?Id=${id}`, id)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }

  allowStartTest(userId: string){
    return this.http.put(`${environment.api_URL}/api/User/allowStartTest`, {userId}).subscribe(res => {
      console.log(res);
    })
  }
}
