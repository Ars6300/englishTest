import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoachTestModel } from 'src/app/core/models/coach-test.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersCoachService {
  constructor(private http: HttpClient) {}

  getAssignedTests(couchId: string): any {
    return this.http.get<string>(`${environment.api_URL}/api/test/assignedToCouch?couchId=${couchId}`);
  }

  getResultsForCoach(testId: string): any {
    return this.http.get<string>(`${environment.api_URL}/api/test/resultForCouch?testId=${testId}`);
  }

  getWritingText(id: string): any {
    return this.http.get<string>(`${environment.api_URL}/api/writing?id=${id}`);

  }
}
