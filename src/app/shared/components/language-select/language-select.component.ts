import { environment } from 'src/environments/environment';
import { StorageService } from './../../../core/services/storage.service';
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

  ngOnInit(): void {
    const lang: string | null = this.storage.getItem('lang');
    if (lang) {
      this.changeLanguage(lang);
    } else {
      this.storage.setItem('lang', environment.defaultLocale);
    }
  }

  changeLanguage(lang: string) {
    this.obj = this.obj.map((item) => {
      if (item.lang === lang) {
        return { ...item, selected: true };
      }
      this.translate.use(lang);
      this.storage.setItem('lang', lang);
      return { ...item, selected: false };
    });
  }

  onLanguageSelect(target: string) {
    this.changeLanguage(target);
  }

  constructor(
    private translate: TranslateService,
    private storage: StorageService
  ) {}
}
