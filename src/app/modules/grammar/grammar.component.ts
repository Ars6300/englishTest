import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';
import { GRAMMAR_TEXT, GRAMMAR_TITLE } from './grammar.constants';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
})
export class GrammarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  about: AboutText[] = [
    {
      title: GRAMMAR_TITLE,
      text: GRAMMAR_TEXT,
    },
  ];
}
