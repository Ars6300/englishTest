import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';
import { WRITTING_TEXT, WRITTING_TITLE } from './writing.constants';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  about: AboutText[] = [
    {
      title: WRITTING_TITLE,
      text: WRITTING_TEXT,
    },
  ];
}
