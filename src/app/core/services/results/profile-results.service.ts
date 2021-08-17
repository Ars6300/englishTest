import { ProfileResult } from './../../models/profile-result.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileResultsService {
  constructor(private http: HttpClient) {}

  // getAllResults(userId: string | null): Observable<any> {
  //   return this.http.get(
  //     `${environment.api_URL}/api/test/history?userId=${userId}`
  //   );
  // }

  getAllResults(userId: string | null): Observable<any> {
    return of([
      {
        examDate: '12.21.12',
        level: 'A1',
        status: 'completed',
        grammarMark: 8,
        auditionMark: 2,
        writingMark: 3,
        speakingMark: 4,
        totalMark: 5,
      },
    ]);
  }
}
