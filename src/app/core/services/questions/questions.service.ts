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
      "questionStatus": 0,
      "page": '0',
      "skip": 0,
      "take": 30
    }
    return this.http.get(`${environment.api_URL}/api/question?Type=${allQuestionsObj.type}&Level=${allQuestionsObj.level}&QuestionStatus=${allQuestionsObj.questionStatus}&Page=${allQuestionsObj.page}&Skip=${allQuestionsObj.skip}&Take=${allQuestionsObj.take}`);
  }
}
