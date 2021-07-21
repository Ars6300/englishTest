import {
  LISTENING_PATH,
  QUESTION_LISTENING_PATH,
  WRITING_PATH,
} from 'src/app/app-routing.constants';
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
  navigateTo = '';

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router,
    private questionStore: Store<QuestionsState>
  ) {}

  ngOnInit() {
    this.questions$ = this.questionStore.select(getQuestions);
    const currentRoute = this.router.url;

    if (currentRoute.includes(GRAMMAR_PATH)) {
      this.navigateTo = `${GRAMMAR_PATH}/${QUESTION_GRAMMAR_PATH}`;
    } else if (currentRoute.includes(LISTENING_PATH)) {
      this.navigateTo = `${LISTENING_PATH}/${QUESTION_LISTENING_PATH}`;
    }

    this.router.navigate([this.navigateTo], {
      queryParams: { index: this.index },
    });
    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
      this.question.push(this.questionsList[this.index]);
    });
  }

  nextQuestion() {
    this.router.navigate([this.navigateTo], {
      queryParams: { index: ++this.index },
    });
    this.question.push(this.questionsList[this.index]);
    if (
      this.index === this.questionsList.length &&
      this.navigateTo.includes(LISTENING_PATH)
    ) {
      this.router.navigate([WRITING_PATH]);
    } else if (this.index === this.questionsList.length) {
      this.router.navigate([LISTENING_PATH]);
    }
  }
}
