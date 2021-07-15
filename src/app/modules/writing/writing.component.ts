import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about: AboutText[] = [
    {
      title: 'Writing', 
      text: `You need to choose a topic for your essay. After selecting a topic, you will be given space to write. The maximum number of characters is 512. Good Luck!`
    }
  ]


}
