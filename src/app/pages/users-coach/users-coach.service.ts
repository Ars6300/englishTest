import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersCoachService {

  header = new HttpHeaders().set(
    'Authorization',
    `Bearer ${this.auth.token[1]}`
  );;
  
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  getAssignedTests(): any {
    /* fetch(`${environment.api_URL}/api/test/assignedToCouch}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.auth.token[1]}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }); */
 
    return this.http.get<string>(
      `${environment.api_URL}/api/test/assignedToCouch`,
      { headers: this.header }
    );
  }

  getResultsForCoach(testId: string): any {
    
    return this.http.get<string>(
      `${environment.api_URL}/api/test/resultForCouch?testId=${testId}`,
      { headers: this.header }
    );
  }

  getWritingText(id: string, testId: string): any {
    
    return this.http.get<any>(
      `${environment.api_URL}/api/writing?writingId=${id}&testId=${testId}`,
      { headers: this.header }
    );
  }

  estimateTest(userAnswerId: string, mark: number) {
    
    return this.http
      .post<any>(
        `${environment.api_URL}/api/userAnswer/estimate`,
        {
          mark,
          userAnswerId,
        },
        { headers: this.header }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  completeCoach(testId: string, comment: string) {
  
    return this.http
      .put<any>(
        `${environment.api_URL}/api/test/completeCouch`,
        {
          testId,
          comment,
        },
        { headers: this.header }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
