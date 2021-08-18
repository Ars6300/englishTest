import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(private http: HttpClient) {}

  getTests(englishLevel: string) {
    return this.http.post(`${environment.api_URL}/api/test`, {
      englishLevel,
    });
  }

  completeTest(testId: string) {
    return this.http.put(
      `${environment.api_URL}/api/test/completeUser?testId=${testId}`,
      {}
    );    
  }
}
