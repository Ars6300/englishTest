import { ProfileResult } from './../../core/models/profile-result.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() result?: ProfileResult;
  constructor() {}

  ngOnInit(): void {}
}
