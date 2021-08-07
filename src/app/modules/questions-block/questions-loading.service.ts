import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Answer, Question } from 'src/app/core/models/questions.model';
import { QuestionModel } from 'src/app/pages/questions-edit/questions-table/questions-table.component';
import { TestDataState } from 'src/app/redux/models/tests.state.model';
// import { QUESTIONS_MOCK } from 'src/app/redux/reducers/questions.reducers';
import { getAllTests } from 'src/app/redux/selectors/tests.selectors';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsLoadingService {
  static getQuestions(): Question[] {
    throw new Error('Method not implemented.');
  }
  private questions: Question[] = [];
  private answers: Answer[] = [];

  constructor(private http: HttpClient, private store: Store<TestDataState>) {}
  tests$ = this.store.select(getAllTests);
  testsData = [];

  getQuestions(): Observable<Question[]> {
    this.tests$.pipe(take(1)).subscribe((tests) => this.testsData = tests);
    
    return of(this.testsData);
  }

  // getQuestionById(id: string) {
  //   return this.questions.find((question: Question) => question.id === id);
  // }

  getAnswerById(questionId: string) {
    return this.answers.find(
      (answer: Answer) => answer.questionId === questionId
    );
  }

  postQuestion(data: any) {
    console.log(data);
    return this.http
      .post<any>(`${environment.api_URL}/api/Question/create`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  // FIXME: remove
  // getQuestion() {
  //   return this.http.get<any>('srcenvironmentsenvironment.ts').pipe(
  //     map((res: QuestionModel) => {
  //       return res;
  //     })
  //   );
  // }

  updateQuestion(data: QuestionModel) {
    console.log(`${environment.api_URL}/api/Question/edit`, data);
    return this.http
      .patch(`${environment.api_URL}/api/Question/edit`, data)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }

  deleteQuestion(id: string) {
    return this.http.delete<any>('srcenvironmentsenvironment.ts' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
