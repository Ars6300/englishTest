import { StorageService } from './core/services/storage.service';
import { LanguageService } from './core/services/language.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { setCookieParams } from './shared/utils/cookies';
import {
  AuthenticationService,
  TOKEN,
} from './core/authentication/authentication.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  constructor(
    private languageService: LanguageService,
    private storage: StorageService,

    private route: Router,
    private serviceAuth: AuthenticationService
  ) {}
  ngAfterContentInit() {}
  ngOnInit(): void {
    const lang: string | null = this.storage.getLocalItem('lang');
    if (!lang) {
      this.storage.setLocalItem('lang', environment.defaultLocale);
    }
    this.languageService.changeLanguage(lang || environment.defaultLocale);
  }
}
