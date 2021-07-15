import { Component, OnInit } from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about: AboutText[] = [
    {
      title: 'Grammar Test', 
      text: `You need to answer 15 questions. Each question can have from 3 to 5 answers. Good luck!`
    }
  ]

}
