import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GRAMMAR_PATH } from 'src/app/app-routing.constants';
import { TITLE_LEVELS } from '../../select-level.constants';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent implements OnInit {
  constructor(private router: Router) {}
  title = TITLE_LEVELS;
  buttons = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermidiate',
    'B2 Upper Int.',
    'C1 Advanced',
    'C2 Proficiency',
  ];
  ngOnInit(): void {}

  startTest(){
    this.router.navigate([`/${GRAMMAR_PATH}`])
  }
}
