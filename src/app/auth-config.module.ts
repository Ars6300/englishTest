import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import {
  NOTIFICATION_PATH,
  PROFILE_PATH,
} from './modules/profile/profile-routing.constants';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: [
        {
          authority: environment.auth_url,
          redirectUrl: environment.local_url,
          postLogoutRedirectUri: environment.local_url,
          clientId: 'client_tye',
          scope: 'openid role Front',
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
        },
      ],
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
