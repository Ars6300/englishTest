import { ProfileResult } from './../../../core/models/profile-result.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() result!: number;
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
