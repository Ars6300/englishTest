import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  title: string = 'Time remaining';
  time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  });
  constructor() {}

  ngOnInit(): void {}
}
