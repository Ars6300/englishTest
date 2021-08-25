import {
  deleteCookieRole,
  deleteCookieToken,
} from 'src/app/shared/utils/cookies';
import { StorageService } from 'src/app/core/services/storage.service';
import { LanguageService } from './../../../core/services/language.service';
import {
  OidcSecurityService,
  OpenIdConfiguration,
} from 'angular-auth-oidc-client';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  constructor(
    public languageService: LanguageService,
    private oidcSecurityService: OidcSecurityService,
    private storage: StorageService
  ) {
    this._configurations = this.oidcSecurityService.getConfigurations();
  }

  logout(configId: string) {
    this.oidcSecurityService.logoff(configId);
    this.storage.clearSession();
    deleteCookieToken();
    deleteCookieRole();
  }
}
