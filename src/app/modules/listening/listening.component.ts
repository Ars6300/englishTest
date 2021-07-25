import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';
import { LISTENING_TEXT, LISTENING_TITLE } from './listening.constants';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.scss'],
})
export class ListeningComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  about: AboutText[] = [
    {
      title: LISTENING_TITLE,
      text: LISTENING_TEXT,
    },
  ];
}
