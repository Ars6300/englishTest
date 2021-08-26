import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ErrorService } from 'src/app/core/services/error.service';

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
  audioId: any;
  answers:
    | [
        {
          text: string;
          isCorrect: boolean;
        }
      ]
    | undefined;
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
  encapsulation: ViewEncapsulation.None,
})
export class QuestionsTableComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable!: false;

  questions$: Observable<Question[]> | undefined;

  questionsList: any;
  questionsData: Question[] = [];

  displayedColumns: string[] = ['id', 'text', 'type', 'edit', 'delete'];
  dataSource: any;
  type = '';
  level = '';
  typeForAudio: any;

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
  materialValue!: FormGroup;
  file = '';
  audioIdForEdit: any;
  guid = `00000000-0000-0000-0000-000000000000`;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private questionStore: Store<QuestionsState>,
    private formBuilder: FormBuilder,
    private questionsSyncStore: QuestionsSyncService,
    private questionsService: QuestionsService,
    private store: Store<GetAllQuestionsState>,
    private _formBuilder: FormBuilder,
    private speakingService: SpeakingService,
    private auth: AuthenticationService,
    private errorService: ErrorService
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
    this.materialValue = this.formBuilder.group({
      answer1: [''],
      answer2: [''],
      answer3: [''],
      answer4: [''],
      answer5: [''],
    });
  }

  questionId = '';
  textInputType: any;
  objForEdit: any;
  audioIdFor: any;

  onAddQuestion() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  getFile(event: any) {
    this.file = event.target.files[0];
  }
  submitFile() {
    const formData = new FormData();
    formData.append('uploadedFile', this.file);

    this.textInputType === '1'
      ? fetch(
          `${
            environment.api_URL
          }/api/audio?AudioDescription=randomText${Math.floor(
            Math.random() * 10000
          )}`,
          {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: `Bearer ${this.auth.token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((result) => {
            this.audioIdForEdit = result.audioId;
          })
      : '';
  }

  getInputTextType(event: any) {
    this.textInputType = event.target.value;
  }
  getInputTextLevel(event: any) {
    // this.textInputLevel = event.target.innerHTML.trim();
  }

  postQuestionDetails() {
    this.questionsModelForPost.text = this.formValue.value.text;
    this.questionsModelForPost.type = +this.formValue.value.type;
    this.questionsModelForPost.englishLevel = this.formValue.value.englishLevel;

    let answersList = [
      {
        text: this.materialValue.value.answer1,
        isCorrect: true,
      },
      {
        text: this.materialValue.value.answer2,
        isCorrect: false,
      },
      {
        text: this.materialValue.value.answer3,
        isCorrect: false,
      },
      {
        text: this.materialValue.value.answer4,
        isCorrect: false,
      },
      {
        text: this.materialValue.value.answer5,
        isCorrect: false,
      },
    ];

    const objPost = {
      text: this.questionsModelForPost.text,
      type: this.questionsModelForPost.type,
      englishLevel: this.questionsModelForPost.englishLevel,
      audioId: this.audioIdForEdit ? this.audioIdForEdit : this.guid,
      answers: answersList.filter((el: any) => !!el.text),
    };

    this.questionsLoadingService.postQuestion(objPost).catch((error) => {
      this.errorService.logError(
        `Error post: ${error}` || 'Something went wrong'
      );
    });
  }

  getAllQuestions() {
    this.questionsLoadingService.getQuestions().subscribe((res) => {
      this.questionsData = res;
    });
  }

  onDeleteQuestion(question: any) {
    this.questionsLoadingService
      .deleteQuestion(question.questionId)
      .subscribe(() => {
        
      });
  }

  onEditQuestion(question: any) {
    this.showAdd = false;
    this.showUpdate = true;

    for (let i = 0; i < question.answers.length; i++) {
      this.materialValue.controls[`answer${i + 1}`].setValue(
        question.answers[i].text
      );
    }

    this.formValue.controls['type'].setValue(question.type);
    this.audioIdFor =  question.audioId
    
    this.formValue.controls['text'].setValue(question.text);
    this.formValue.controls['englishLevel'].setValue(question.englishLevel);

    this.questionId = '';
    this.questionId = question.questionId;
  }

  onUpdateQuestionDetails() {
    this.questionModel.questionId = this.questionId;
    this.questionModel.text = this.formValue.value.text;
    this.questionModel.type = this.formValue.value.type;
    this.questionModel.englishLevel = this.formValue.value.englishLevel;
    
    // this.questionsModelForPost.audioId = 

    // console.log(this.audioIdForEdit);
    

    let answersList = [
      {
        text: this.materialValue.value.answer1,
        isCorrect: true,
      },
      {
        text: this.materialValue.value.answer2,
        isCorrect: false,
      },
      {
        text: this.materialValue.value.answer3,
        isCorrect: false,
      },
      {
        text: this.materialValue.value.answer4,
        isCorrect: false,
      },
      {
        text: this.materialValue.value.answer5,
        isCorrect: false,
      },
    ];



    this.objForEdit = {
      questionId: this.questionModel.questionId,
      text: this.questionModel.text,
      type: this.questionModel.type,
      englishLevel: this.questionModel.englishLevel,
      audioId: this.audioIdFor ? this.audioIdFor : this.guid,
      answers: answersList.filter((el: any) => !!el.text),
    };

    this.questionsLoadingService.updateQuestion(this.objForEdit).subscribe(
      (res) => {
        let ref = document.getElementById('close-img');
        ref?.click();
        this.formValue.reset();
        this.closeModal();
        this.formValue.reset();
        this.materialValue.reset();
      },
      (error) => {
        this.errorService.logError(`Something went wrong`);
      }
    );
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
    this.materialValue.reset();
    this.textInputType = '';
    this.audioIdForEdit = '';
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
