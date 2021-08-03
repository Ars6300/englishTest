import { Component, OnInit } from '@angular/core';
import { getUrlName } from 'src/app/shared/utils/utils';
import { QuestionType } from '../../../../core/models/test.model'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  writingType = QuestionType.Writing
  speakingType = QuestionType.Speaking

  url = getUrlName()

  selectTheme(event: { target: any; }){
    console.log(event.target.innerText);
  }

  themesEssay = [
    {
      themeName: 'test1',
    },
    {
      themeName: 'test1',
    },
    {
      themeName: 'testtest test1',
    },
    {
      themeName: 'test test1',
    },
    {
      themeName: 'test1',
    },
  ]
  themesSpeaking = [
    {
      themeName: 'test2',
    },
    {
      themeName: 'test2',
    },
    {
      themeName: 'testtest test2',
    },
    {
      themeName: 'test test2',
    },
    {
      themeName: 'test2',
    },
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
