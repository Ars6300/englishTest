import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  title: string = 'Time remaining';
  @Input() time = 3600;
  constructor() {}

  ngOnInit(): void {}
}
