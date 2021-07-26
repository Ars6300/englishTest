import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/models/questions.model';
import { QuestionsSyncService } from 'src/app/core/services/questions-sync.service';
import { QuestionsLoadingService } from 'src/app/modules/questions-block/questions-loading.service';
import { QuestionsState } from 'src/app/redux/reducers/questions.reducers';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.scss']
})
export class QuestionsTableComponent implements OnInit {
  questions$: Observable<Question[]> | undefined;

  questionsList: Question[] = [];

  openEdit = false;
  formValue !: FormGroup;

  constructor( private questionsLoadingService: QuestionsLoadingService,
    private questionStore: Store<QuestionsState>,
    private formBuilder: FormBuilder,
    private questionsSyncStore: QuestionsSyncService,
    private router: Router) { }

  ngOnInit() {
    this.questionsSyncStore.init();

    this.questions$ = this.questionStore.select(getQuestions);

    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
    });

    this.formValue = this.formBuilder.group({
      id: [''],
      text: [''],
      type: ['']
    })
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
  }
}
