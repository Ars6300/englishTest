import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersCoachService {
  constructor(private http: HttpClient) {}

  getAssignedTests(couchId: string): any {
    return this.http.get<string>(
      `${environment.api_URL}/api/test/assignedToCouch?couchId=${couchId}`
    );
  }

  getResultsForCoach(testId: string): any {
    return this.http.get<string>(
      `${environment.api_URL}/api/test/resultForCouch?testId=${testId}`
    );
  }

  getWritingText(id: string): any {
    return this.http.get<string>(`${environment.api_URL}/api/writing?id=${id}`);
  }

  estimateTest(userAnswerId: string, mark: number) {
    return this.http
      .put<any>(`${environment.api_URL}/api/userAnswer/estimate`, {
        userAnswerId,
        mark,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  completeCoach(testId: string, comment: string) {
    return this.http
      .put<any>(`${environment.api_URL}/api/test/completeCouch`, {
        testId,
        comment,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
