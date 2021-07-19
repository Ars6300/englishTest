import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { QuestionsState } from 'src/app/redux/reducers/questions.reducers';
import { Question } from '../../../core/models/questions.model';
import { QuestionsLoadingService } from '../questions-loading.service';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';
import {
  GRAMMAR_PATH,
  QUESTION_GRAMMAR_PATH,
} from '../../../app-routing.constants';

@Component({
  selector: 'app-questions-block',
  templateUrl: './questions-block.component.html',
  styleUrls: ['./questions-block.component.scss'],
  providers: [QuestionsLoadingService],
})
export class QuestionsBlockComponent implements OnInit {
  question: Question[] = [];

  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;

  index = 0;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router,
    private questionStore: Store<QuestionsState>
  ) {}

  ngOnInit() {
    this.questions$ = this.questionStore.select(getQuestions);

    this.router.navigate([GRAMMAR_PATH + '/' + QUESTION_GRAMMAR_PATH], {
      queryParams: { index: this.index },
    });
    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
      this.question.push(this.questionsList[this.index]);
    });
  }

  nextQuestion() {
    this.router.navigate([GRAMMAR_PATH + '/' + QUESTION_GRAMMAR_PATH], {
      queryParams: { index: ++this.index },
    });
    this.question.push(this.questionsList[this.index]);
    if (this.index === this.questionsList.length) {
      this.router.navigate(['listening']);
    }
  }
}
