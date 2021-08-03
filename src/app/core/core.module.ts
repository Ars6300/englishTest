import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptor/error-interceptor/http-error.interceptor';
import { AuthInterceptor } from './interceptor/auth-interceptor/auth-interceptor';
import { GlobalErrorHandler } from './interceptor/error-interceptor/global-error-handler';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
