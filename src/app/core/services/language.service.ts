import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LANGUAGE_ENG,
  LANGUAGE_RU,
} from 'src/app/shared/components/language-select/language-select.constants';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
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
  constructor(
    private translate: TranslateService,
    private storage: StorageService
  ) {}

  changeLanguage(lang: string) {
    this.obj = this.obj.map((item) => {
      if (item.lang === lang) {
        return { ...item, selected: true };
      }
      this.translate.use(lang);
      this.storage.setLocalItem('lang', lang);
      return { ...item, selected: false };
    });
  }
}
