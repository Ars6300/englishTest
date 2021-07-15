import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.scss']
})
export class ListeningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about: AboutText[] = [
    {
      title: 'Listening', 
      text: `In order to start listening you need to press the Start button. This audio will be available for listening 3 times. After listening, 10 questions will be available for you to answer. Good Luck!`
    }
  ]

}
