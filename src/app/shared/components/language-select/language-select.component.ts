import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_ENG, LANGUAGE_RU } from './language-select.constants';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  obj: any[] = [
    {
      langText: LANGUAGE_ENG,
      selected: true,
      lang: 'en',
    },
    {
      langText: LANGUAGE_RU,
      selected: false,
      lang: 'ru',
    },
  ];

  onChangeLanguage(target: any) {
    this.obj = this.obj.map((item) => {
      if (item.lang === target.lang) return { ...item, selected: true };
      this.translate.use(target.lang);
      return { ...item, selected: false };
    });
  }

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
}
