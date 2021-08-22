import { Observable, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WritingService } from '../writing.service';
import { Router } from '@angular/router';
import { SPEAKING_PATH } from 'src/app/app-routing.constants';
import { Store } from '@ngrx/store';
import { QuestionsState } from 'src/app/redux/models/questions.state.model';
import { Question } from 'src/app/core/models/questions.model';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';
import { QuestionsLoadingService } from '../../questions-block/questions-loading.service';
import { QuestionType } from 'src/app/core/models/test.model';
import { ErrorService } from 'src/app/core/services/error.service';
export class EssayText {
  writingText: string = '';
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [WritingService, QuestionsLoadingService],
})
export class InputComponent implements OnInit, OnDestroy {
  charactersLimit: number = environment.CHARACTERS_LIMIT;
  writingSubscription!: Subscription;
  essayTextModel: EssayText = new EssayText();
  condition: boolean = false;

  question: Question[] = [];
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;

  listeningType = Number(QuestionType.Writing);

  currentType: number = 0;

  moduleQuestion: string = '';
  moduleAnswer: string = '';
  postAnswer: string = '';

  constructor(
    private writingService: WritingService,
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router,
    private questionStore: Store<QuestionsState>,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.questions$ = this.questionStore.select(getQuestions);

    this.currentType = this.listeningType;

    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
      this.question = this.getQuestionsByType();
      this.moduleAnswer = this.question[0].userAnswerId;
    });
  }

  selectTheme(event: { target: any }) {
    this.condition = true;
    this.moduleQuestion = event.target.id;
    this.onPostTopic();
  }

  onEssaySubmit(essayText: NgForm) {
    this.essayTextModel.writingText = essayText.controls['essay'].value;

    this.writingService.postEssay(this.essayTextModel).subscribe(
      (res: any) => {
        this.postAnswer = res;
        console.log(res);
        this.onPostAnswer();
        this.router.navigate([SPEAKING_PATH]);
      },
      (error) => {
        console.log('Something went wrong.');
      }
    );
  }
  onPostTopic() {
    this.writingService
      .postTopic(this.moduleAnswer, this.moduleQuestion)
      .subscribe(
        (res: any) => {},
        (error) => {
          this.errorService.logError(error || 'Something went wrong');
        }
      );
  }

  onPostAnswer() {
    this.questionsLoadingService
      .postAnswer(this.moduleAnswer, this.postAnswer)
      .subscribe(
        (res: any) => {},
        (error) => {
          this.errorService.logError(error || 'Something went wrong');
        }
      );
  }

  getQuestionsByType() {
    return this.questionsList.filter((el) => el.type === this.currentType);
  }

  showButton(id: string) {
    if (this.condition) {
      return this.moduleQuestion == id;
    }
    return true;
  }

  ngOnDestroy(): void {
    if (this.writingSubscription) {
      this.writingSubscription.unsubscribe();
    }
  }
}
