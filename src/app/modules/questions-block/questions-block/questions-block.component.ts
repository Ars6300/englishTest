import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Question } from '../../../core/models/questions.model';

import { QuestionsLoadingService } from '../questions-loading.service';

@Component({
  selector: 'app-questions-block',
  templateUrl: './questions-block.component.html',
  styleUrls: ['./questions-block.component.scss'],
  providers: [QuestionsLoadingService],
})

export class QuestionsBlockComponent implements OnInit {
  questions: Question[] = [];
  question: Question[] = [];

  //public questions: Observable<Question[]>;

  index = 0;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router
    //private questionStore: Store<QuestionState>
  ) {}

  ngOnInit() {
    //this.questionStore.dispatch(new GetQuestions());
    //this.questions = this.questionStore.select(getQuestions);
    
    this.router.navigate(['grammar/g-question/:'], {
      queryParams: { index: this.index },
    });
    this.questionsLoadingService.getQuestions().subscribe((questions) => {
      this.questions = questions;
      this.question.push(this.questions[this.index]);
    });
  }

  nextQuestion() {
    this.router.navigate(['grammar/g-question/:'], {
      queryParams: { index: ++this.index },
    });
    this.question.push(this.questions[this.index]);
    if (this.index === this.questions.length) {
      this.router.navigate(['listening']);
    }
  }
}