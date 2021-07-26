import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Answer, Question } from 'src/app/core/models/questions.model';
import { QUESTIONS_MOCK } from 'src/app/redux/reducers/questions.reducers';

@Injectable({
  providedIn: 'root',
})
export class QuestionsLoadingService {
  static getQuestions(): Question[] {
    throw new Error('Method not implemented.');
  }
  private questions: Question[] = [];
  private answers: Answer[] = [];

  private tryCounter: number = 0;

  questionsPath: string = 'assets/questions.json';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS_MOCK);
  }

  getQuestionById(id: string) {
    return this.questions.find((question: Question) => question.id === id);
  }

  getAnswerById(questionId: string) {
    return this.answers.find(
      (answer: Answer) => answer.questionId === questionId
    );
  }

  postQuestion(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getQuestion() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateQuestion(data: any, id: string) {
    return this.http.put<any>('http://localhost:3000/posts' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteQuestion(id: string) {
    return this.http.delete<any>('http://localhost:3000/posts' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
