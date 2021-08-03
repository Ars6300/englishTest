import { Component, OnInit } from '@angular/core';
import { RESULT_POINTS, RESULT_QUESTIONS_COUNT, RESULT_YOUR_ANSWERS } from '../result.constants';

@Component({
  selector: 'app-results',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  headers = [
    {
      questionCount: RESULT_QUESTIONS_COUNT,
      yourAnswer: RESULT_YOUR_ANSWERS,
      points: RESULT_POINTS
    }
  ]
  
  data = [
    {
      count: 1,
      answer: 'A',
      point: 1,
    },
    {
      count: 2,
      answer: 'A',
      point: 1,
    },
    {
      count: 3,
      answer: 'A',
      point: 1,
    },
    {
      count: 4,
      answer: 'A',
      point: 1,
    },
    {
      count: 5,
      answer: 'A',
      point: 1,
    },
    {
      count: 6,
      answer: 'A',
      point: 1,
    },
    {
      count: 7,
      answer: 'A',
      point: 1,
    },
    {
      count: 8,
      answer: 'A',
      point: 1,
    },
    {
      count: 9,
      answer: 'A',
      point: 1,
    },
    {
      count: 10,
      answer: 'A',
      point: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
