import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EssayText } from './essay-input/input.component';

@Injectable({
  providedIn: 'root',
})
export class WritingService {
  constructor(private http: HttpClient) {}

  postEssay(data: EssayText) {
    return this.http
      .post<any>(`${environment.api_URL}/api/writing`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  postTopic(id: string, answerId: string) {
    return this.http
      .post<any>(`${environment.api_URL}/api/userAnswer/topic`, {
        answerId,
        id
        
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
