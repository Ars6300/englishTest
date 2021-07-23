import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Grammar } from './left-layout.constants';

export interface AboutText {
  title: string;
  text: string;
}

@Component({
  selector: 'app-left-layout',
  templateUrl: './left-layout.component.html',
  styleUrls: ['./left-layout.component.scss'],
})
export class LeftLayoutComponent implements OnInit {
  @Input() about: AboutText[] = [];
  url = window.location.pathname.split('/')[1];

  constructor(private translate: TranslateService) {
    this.about = [new Grammar()];
    console.log(this.about);
  }

  ngOnInit() {}
}
