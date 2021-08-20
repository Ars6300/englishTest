import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

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
    this.tests$.pipe(take(1)).subscribe((tests) => (this.testsData = tests));
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
      .post<any>(`${environment.api_URL}/api/question`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  // getQuestion() {
  //   return this.http.get<any>('srcenvironmentsenvironment.ts').pipe(
  //     map((res: QuestionModel) => {
  //       return res;
  //     })
  //   );
  // }

  updateQuestion(data: QuestionModel) {
    console.log(data);
    return this.http
      .put(`${environment.api_URL}/api/question`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteQuestion(id: string) {
    let obj = {
      questionId: id
    }
    return this.http.delete(`${environment.api_URL}/api/question`, {body: obj})
  }

  downloadAudio(audioId: any): Observable<Blob> {
    console.log(audioId);
    const url = `${environment.api_URL}/api/audio/id?audioId=${audioId}`;
    // https://localhost:44356/api/audio?audioId=E8C5DD54-E297-4227-A026-C766453E7001&testId=5f56d726-1f15-4234-9ec7-190e36d22ad1
    return this.http.get(url, { responseType: 'blob' }).pipe(
      take(1),
      filter((audio) => !!audio)
    );
  }

  audioTriesCheck(audioId: string, count: number, canPlay: boolean) {
    return this.http
      .post<any>(`${environment.api_URL}/api/Audio/Check`, {
        audioId,
        count,
        canPlay,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  postAnswer(id: string, answerId: string) {
    return this.http
      .post<any>(`${environment.api_URL}/api/userAnswer/answer`, {
        id, answerId 
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
