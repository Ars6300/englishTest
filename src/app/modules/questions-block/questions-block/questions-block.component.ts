import {
  LISTENING_PATH,
  QUESTION_LISTENING_PATH,
  WRITING_PATH,
} from 'src/app/app-routing.constants';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Question } from '../../../core/models/questions.model';
import { QuestionsLoadingService } from '../questions-loading.service';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';
import {
  GRAMMAR_PATH,
  QUESTION_GRAMMAR_PATH,
} from '../../../app-routing.constants';
import { QuestionsSyncService } from 'src/app/core/services/questions-sync.service';
import { QuestionsState } from 'src/app/redux/models/questions.state.model';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { QuestionType } from 'src/app/core/models/test.model';
import { ErrorService } from 'src/app/core/services/error.service';
@Component({
  selector: 'app-questions-block',
  templateUrl: './questions-block.component.html',
  styleUrls: ['./questions-block.component.scss'],
  providers: [QuestionsLoadingService, QuestionsSyncService],
})
export class QuestionsBlockComponent implements OnInit, OnDestroy {
  question: Question[] = [];
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;
  listeningType = Number(QuestionType.Listening);
  questionsSubscription!: Subscription;
  index = 0;
  navigateTo = '';

  moduleQuestion: string = '';
  moduleAnswer: string = '';
  checkedInput: boolean = false;
  listeningBlockIsActive: boolean = false;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router,
    private questionStore: Store<QuestionsState>,
    private questionsSyncStore: QuestionsSyncService,
    private errorService: ErrorService
  ) {}

  currentType: number = 0;

  ngOnInit() {
    this.questionsSyncStore.init();
    this.questions$ = this.questionStore.select(getQuestions);
    const currentRoute = this.router.url;

    if (currentRoute.includes(GRAMMAR_PATH)) {
      this.currentType = Number(QuestionType.Grammar);
      this.listeningBlockIsActive = false;
      this.navigateTo = `${GRAMMAR_PATH}/${QUESTION_GRAMMAR_PATH}`;
    } else if (currentRoute.includes(LISTENING_PATH)) {
      this.currentType = this.listeningType;
      this.navigateTo = `${LISTENING_PATH}/${QUESTION_LISTENING_PATH}`;
    }
    this.router.navigate([this.navigateTo], {
      queryParams: { index: this.index },
    });
    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
      this.question = this.getQuestionsByType();
    });
  }

  ngOnDestroy(): void {
    if (this.questionsSubscription) {
      this.questionsSubscription.unsubscribe();
    }
  }

  getQuestionsByType() {
    return this.questionsList.filter((el) => el.type === this.currentType);
  }

  navigateToQuestion(index: number) {
    this.router.navigate([this.navigateTo], {
      queryParams: { index: index },
    });
    this.question.push(this.questionsList[this.index]);
  }

  setIndex(event: StepperSelectionEvent) {
    this.index = event.selectedIndex;
    this.navigateToQuestion(this.index);
  }

  nextSection() {
    if (
      this.index + 1 === this.getQuestionsByType().length &&
      this.navigateTo.includes(LISTENING_PATH)
    ) {
      this.router.navigate([WRITING_PATH]);
    } else if (this.index + 1 === this.getQuestionsByType().length) {
      this.router.navigate([LISTENING_PATH]);
    }
  }

  getOption(event: any): any {
    this.moduleQuestion = event.target.id;
    this.moduleAnswer = event.target.value;

    this.questionsLoadingService
      .postAnswer(this.moduleQuestion, this.moduleAnswer)
      .subscribe(
        (res: any) => {},
        (error) => {
          this.errorService.logError(error || 'Something went wrong');
        }
      );
  }
}
