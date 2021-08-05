import { StorageService } from './core/services/storage.service';
import { LanguageService } from './core/services/language.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService,
    private storage: StorageService
  ) {}
  ngOnInit(): void {
    const lang: string | null = this.storage.getItem('lang');
    if (lang) {
      this.languageService.changeLanguage(lang);
    } else {
      this.storage.setItem('lang', environment.defaultLocale);
      this.translateService.use(environment.defaultLocale);
    }
  }
}
