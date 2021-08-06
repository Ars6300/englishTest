import { LanguageService } from './../../../core/services/language.service';
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
  ngOnInit(): void {}

  onLanguageSelect(target: string) {
    this.languageService.changeLanguage(target);
  }

  constructor(public languageService: LanguageService) {}
}
