import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about: AboutText[] = [
    {
      title: 'Speaking', 
      text: `You need to select the topic of the speaking, once you select the topic, a button to start recording will be available to you. When you have finished talking, press the stop button. (Remember you have 5 minutes.)
      Good Luck!`
    }
  ]

}
