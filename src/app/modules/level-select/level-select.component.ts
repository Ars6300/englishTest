import {Component, OnInit} from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';
import { SELECT_LEVEL_TEXT, SELECT_LEVEL_TITLE } from './select-level.constants';



@Component({
  selector: 'app-select-level',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss']
})

export class SelectLevelComponent implements OnInit{
  
  about: AboutText[] = [
    {
      title: SELECT_LEVEL_TITLE, 
      text: SELECT_LEVEL_TEXT
    }
  ]
  

  constructor(){}

  ngOnInit(){
    
  }
  
}