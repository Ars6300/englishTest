import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  index = 0;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router
  ) {}

  ngOnInit() {
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