import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  // inputs: ['current_progress', 'max_progress'],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input('current')
  current_progress:number = 50;
  @Input('max')
  max_progress:number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
