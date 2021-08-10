import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(private http: HttpClient) {}

  getTests(userId: string, engLevel: string) {
    return this.http.post(
      `${environment.api_URL}/create?UserId=${userId}&EnglishLevel=${engLevel}`,
      {}
    );
  }

  completeTest(testId: string) {
    return this.http.patch(
      `${environment.api_URL}/complete?TestId=${testId}`,
      {}
    );
  }
}
