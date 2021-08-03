import { ErrorService } from './../../services/error.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public snackBar: MatSnackBar,
    private errorService: ErrorService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.status) {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        } else {
          errorMessage = `${error.name}\n${error.message}`;
        }
        this.errorService.logError(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
