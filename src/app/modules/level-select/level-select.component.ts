import {Component, OnInit} from '@angular/core';
import { AboutText } from 'src/app/shared/components/left-layout/left-layout.component';



@Component({
  selector: 'app-select-level',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss']
})

export class SelectLevelComponent implements OnInit{
  
  about: AboutText[] = [
    {
      title: 'About Test', 
      text: `The test consists of 4 blocks:
      Block 1)  Grammar Test.
      Block 2) Listening. 
      Block 3) Essay
      Block 4) Speaking.
      You have 60 minutes for all blocks. Good luck!`
    }
  ]


  constructor(){}

  ngOnInit(){}
  
}