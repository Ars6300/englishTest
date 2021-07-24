import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';
import { SPEAKING_TEXT, SPEAKING_TITLE } from './speaking.constants';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss'],
})
export class SpeakingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  about: AboutText[] = [
    {
      title: SPEAKING_TITLE,
      text: SPEAKING_TEXT,
    },
  ];
}
