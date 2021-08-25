import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileResultsService {
  constructor(private http: HttpClient) {}

  getAllResults(userId: string | null): Observable<any> {
    return this.http.get(
      `${environment.api_URL}/api/test/history?userId=${userId}`
    );
  }
}
