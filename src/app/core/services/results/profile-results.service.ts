import { RESULTS_MOCK } from './../../../redux/reducers/profile-results.reducer';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileResultsService {
  constructor() {}

  getAll(): Observable<any> {
    return of(RESULTS_MOCK);
  }
}
