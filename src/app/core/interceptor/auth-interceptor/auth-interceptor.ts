import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.token) {
      const cloned = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth.token}`,
        },
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}