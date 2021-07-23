import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  obj: any[] = [
    {
      lang: 'eng',
      selected: true,
    },
    {
      lang: 'ru',
      selected: false,
    },
  ];

  constructor() {}

  onChangeLanguage(target: any) {
    this.obj = this.obj.map((item) => {
      if (item.lang === target.lang) return { ...item, selected: true };
      return { ...item, selected: false };
    });
  }

  ngOnInit(): void {}
}
