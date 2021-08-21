import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { NOTIFICATION_PATH, PROFILE_PATH } from './modules/profile/profile-routing.constants';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: [
        {
          authority: 'https://localhost:5001',
          redirectUrl: `https://localhost:4200`,
          postLogoutRedirectUri: 'https://localhost:4200',
          clientId: 'client_tye',
          scope: 'openid role Front',
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          // logLevel: LogLevel.Debug,
        }
      ],
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
