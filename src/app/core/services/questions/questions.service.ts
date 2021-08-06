import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  getAllQuestions(type: any, level: any) {
    const allQuestionsObj = {
      "type": +type,
      "level": level,
      "skip": 8,
      "take": 20
    }
    return this.http.put(`${environment.api_URL}/api/Question/getAll`, allQuestionsObj);
  }
}
