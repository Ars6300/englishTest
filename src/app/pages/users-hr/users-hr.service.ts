import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { USERS_MOCK } from 'src/app/redux/reducers/users-hr.reducers';

@Injectable({
  providedIn: 'root'
})
export class UsersHrService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return of(USERS_MOCK);
  }
}
