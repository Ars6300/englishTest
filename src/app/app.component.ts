import { StorageService } from './core/services/storage.service';
import { LanguageService } from './core/services/language.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { setCookieParams } from './shared/utils/cookies';
import { AuthenticationService, TOKEN } from './core/authentication/authentication.service';
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
    public oidcSecurityService: OidcSecurityService,
    private route: Router,
    private serviceAuth: AuthenticationService
  ) {
  }
  ngAfterContentInit() {
    // this.oidcSecurityService
    //   .checkAuthMultiple()
    //   .subscribe(([{ isAuthenticated, userData, accessToken }]) => {
    //
    //   });
    // this.oidcSecurityService
    //   .checkAuth()
      
  }
  ngOnInit(): void {

    // this.oidcSecurityService
    //   .checkAuthMultiple()
    //   .subscribe(([{ isAuthenticated, userData, accessToken }]) => {
    //     setCookieParams(TOKEN, accessToken, environment.COOKIE_KEEP_SECONDS)
    //   });

    const lang: string | null = this.storage.getItem('lang');
    if (!lang) {
      this.storage.setItem('lang', environment.defaultLocale);
    }
    this.languageService.changeLanguage(lang || environment.defaultLocale);
  }
}
