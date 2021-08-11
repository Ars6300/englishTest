import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Question } from 'src/app/core/models/questions.model';
import { QuestionsSyncService } from 'src/app/core/services/questions-sync.service';
import { QuestionsLoadingService } from 'src/app/modules/questions-block/questions-loading.service';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { QuestionsState } from 'src/app/redux/models/questions.state.model';
import { QuestionsService } from 'src/app/core/services/questions/questions.service';
import { GetAllQuestionsState } from 'src/app/redux/models/get-all-questions.state.model';
import * as getAllQuestionsActions from 'src/app/redux/actions/get-all-questions.actions';
import { QuestionType } from 'src/app/core/models/test.model';
import { getAllQuestions } from 'src/app/redux/selectors/get-all-questions.selectors';
import { SpeakingService } from 'src/app/core/services/speaking/speaking.service';

export class QuestionModel {
  questionId: string = '';
  type: string = '';
  questionStatus: number = 2;
  text: string = '';
  englishLevel: string = '';
  isActive: boolean | undefined;
}

export class QuestionsModelForPost {
  text: string = '';
  type: number = 0;
  englishLevel: string = '';
}

interface Types {
  value: string;
  viewValue: string;
}

interface Levels {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.scss'],
})
export class QuestionsTableComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  questions$: Observable<Question[]> | undefined;

  questionsList: any;
  questionsData: Question[] = [];

  displayedColumns: string[] = ['id', 'text', 'type', 'edit', 'delete'];
  dataSource: any;
  type = '';
  level = '';

  types: Types[] = [
    { value: QuestionType.Grammar, viewValue: 'Grammar' },
    { value: QuestionType.Listening, viewValue: 'Listening' },
    { value: QuestionType.Writing, viewValue: 'Writing' },
    { value: QuestionType.Speaking, viewValue: 'Speaking' },
  ];

  levels: Levels[] = [
    { value: 'A1', viewValue: 'A1' },
    { value: 'A2', viewValue: 'A2' },
    { value: 'B1', viewValue: 'B1' },
    { value: 'B2', viewValue: 'B2' },
    { value: 'C1', viewValue: 'C1' },
    { value: 'C2', viewValue: 'C2' },
  ];

  questionModel: QuestionModel = new QuestionModel();
  @ViewChild(MatTable) table!: MatTable<QuestionModel>;
  questionsModelForPost: QuestionsModelForPost = new QuestionsModelForPost();

  openEdit = false;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private questionStore: Store<QuestionsState>,
    private formBuilder: FormBuilder,
    private questionsSyncStore: QuestionsSyncService,
    private questionsService: QuestionsService,
    private store: Store<GetAllQuestionsState>,
    private _formBuilder: FormBuilder,
    private speakingService: SpeakingService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    this.questionsSyncStore.init();

    this.formValue = this.formBuilder.group({
      id: [''],
      text: [''],
      type: [''],
      englishLevel: [''],
    });
  }

  onAddQuestion() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  file = '';
  getFile(event: any) {
    this.file = event.target.files[0];
  }
  submitFile() {
    this.speakingService.uploadFile(this.file);
  }

  postQuestionDetails() {
    /* this.questionModel.id = this.formValue.value.id; */
    // this.questionsModelForPost.text = this.formValue.value.text;
    // this.questionsModelForPost.type = +this.formValue.value.type;
    // this.questionsModelForPost.englishLevel = this.formValue.value.englishLevel;
    const objPost = {
      text: this.formValue.value.text,
      type: +this.formValue.value.type,
      englishLevel: this.formValue.value.englishLevel,
      // audioId: "" || ,
      questionStatus: 2,
    };

    this.questionsLoadingService.postQuestion(objPost).subscribe(
      (res: any) => {
        console.log(res);
        // const ref = document.getElementById('cancel');
        // ref?.click();
        // this.formValue.reset();
        // this.closeModal();
      },
      (error) => {
        console.log('Something went wrong.');
      }
    );
  }

  getAllQuestions() {
    this.questionsLoadingService.getQuestions().subscribe((res) => {
      this.questionsData = res;
    });
    console.log(this.questionsData);
  }

  onDeleteQuestion(question: any) {
    this.questionsLoadingService
      .deleteQuestion(question.questionId)
      .subscribe((res) => {
        console.log(res);
      });
  }

  // FIX: method edit return questionId not Id. QuestionModel changed on any for short!!!
  onEditQuestion(question: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.questionModel.questionId = question.questionId;
    this.formValue.controls['id'].setValue(question.questionId);
    this.formValue.controls['text'].setValue(question.text);
    this.formValue.controls['type'].setValue(question.type);
  }

  onUpdateQuestionDetails() {
    this.questionModel.questionId = this.formValue.value.id;
    this.questionModel.text = this.formValue.value.text;
    this.questionModel.type = this.formValue.value.type;
    this.questionModel.englishLevel = this.formValue.value.englishLevel;

    this.questionsLoadingService
      .updateQuestion(this.questionModel)
      .subscribe((res) => {
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.closeModal();
      });
  }

  openModal() {
    let modal = document.getElementById('modal');
    modal?.classList.remove('modal-close');
    modal?.classList.add('modal-open');
  }

  closeModal() {
    let modal = document.getElementById('modal');
    modal?.classList.remove('modal-open');
    modal?.classList.add('modal-close');
    this.formValue.reset();
  }

  addData() {
    const randomElementIndex = Math.floor(
      Math.random() * this.questionsList.length
    );
    this.dataSource.push(this.questionsList[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  getQuestions() {
    this.store.dispatch(
      getAllQuestionsActions.getQuestions({
        typeModel: this.type,
        level: this.level,
      })
    );

    this.questions$ = this.store.select(getAllQuestions);

    this.questionsService
      .getAllQuestions(this.type, this.level)
      .subscribe((questions$) => {
        this.questionsList = questions$;
        this.dataSource = [...this.questionsList];
      });
  }
  getType(type: any) {
    this.type = type;
  }

  getLevel(level: any) {
    this.level = level;
  }
}
