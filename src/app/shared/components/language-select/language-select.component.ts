import { LanguageService } from './../../../core/services/language.service';
import { environment } from 'src/environments/environment';
import { StorageService } from './../../../core/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_ENG, LANGUAGE_RU } from './language-select.constants';
import { OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';
@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  private _configurations: OpenIdConfiguration[] = <OpenIdConfiguration[]>{};
  public get configurations(): OpenIdConfiguration[] {
    return this._configurations;
  }
  public set configurations(value: OpenIdConfiguration[]) {
    this._configurations = value;
  }

  ngOnInit(): void {}

  onLanguageSelect(target: string) {
    this.languageService.changeLanguage(target);
  }

  constructor(public languageService: LanguageService, private oidcSecurityService: OidcSecurityService) {
    this._configurations = this.oidcSecurityService.getConfigurations();
  }

  logout(configId: string) {
    this.oidcSecurityService.logoff(configId);
  }
  
}

