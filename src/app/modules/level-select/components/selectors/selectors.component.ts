import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'Select your English level';
  buttons = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermidiate',
    'B2 Upper Int.',
    'C1 Advanced',
    'C2 Proficiancy',
  ];
  ngOnInit(): void {}

  startTest(){
    this.router.navigate(['/grammar'])
  }
}
