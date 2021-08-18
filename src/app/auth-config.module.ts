import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: [
        {
          authority: 'https://localhost:5001',
          redirectUrl: 'https://localhost:4200/account',
          postLogoutRedirectUri: 'https://localhost:4200/account',
          clientId: 'client_tye',
          scope: 'openid profile role Front',
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
