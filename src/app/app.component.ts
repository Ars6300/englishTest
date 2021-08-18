import { StorageService } from './core/services/storage.service';
import { LanguageService } from './core/services/language.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { setCookieParams } from './shared/utils/cookies';
import { TOKEN } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private storage: StorageService,
    public oidcSecurityService: OidcSecurityService
  ) {}
  ngOnInit(): void {
    const lang: string | null = this.storage.getItem('lang');
    if (!lang) {
      this.storage.setItem('lang', environment.defaultLocale);
    }
    this.languageService.changeLanguage(lang || environment.defaultLocale);

    this.oidcSecurityService
      .checkAuthMultiple()
      .subscribe(([{ isAuthenticated, userData, accessToken }]) => {
        // console.log(`Current access token is '${accessToken}'`);
        setCookieParams(TOKEN, accessToken, environment.COOKIE_KEEP_SECONDS)
      });
  }
}
