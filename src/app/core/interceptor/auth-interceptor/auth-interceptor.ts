import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.token}`
      }
    });
    return next.handle(request);
  }
}





// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from '../../authentication/authentication.service';

// const APPLICATION_TYPE = 'application/json'
// const HTTP_SCHEME = 'Bearer'

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private auth: AuthenticationService, private oauthService: OAuthService) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (this.auth.token) {
//       const cloned = req.clone({
//         setHeaders: {
//           'Content-Type': APPLICATION_TYPE,
//           authorization: `${HTTP_SCHEME} ${this.auth.token}`,
//         },
//       });
//       return next.handle(cloned);
//     } else {
//       return next.handle(req);
//     }
//   }
// }


// ***************************************************

// import { Injectable, Inject, Optional } from '@angular/core';
// import {
//   OAuthModuleConfig,
//   OAuthResourceServerErrorHandler,
//   OAuthService,
//   OAuthStorage,
// } from 'angular-oauth2-oidc';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse,
//   HttpErrorResponse,
// } from '@angular/common/http';
// // import {Observable} from 'rxjs/Observable';
// // import { OAuthResourceServerErrorHandler } from "./resource-server-error-handler";
// // import { OAuthModuleConfig } from "../oauth-module.config";

// import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(
//     private authStorage: OAuthStorage,
//     private errorHandler: OAuthResourceServerErrorHandler,
//     @Optional() private moduleConfig: OAuthModuleConfig
//   ) {}

//   private checkUrl(url: string): boolean {
//     let found = this.moduleConfig.resourceServer.allowedUrls?.find((u) =>
//       url.startsWith(u)
//     );
//     return !!found;
//   }

//   public intercept(req: any, next: HttpHandler) {
//     let url = req.url.toLowerCase();

//     if (!this.moduleConfig) return next.handle(req);
//     if (!this.moduleConfig.resourceServer) return next.handle(req);
//     if (!this.moduleConfig.resourceServer.allowedUrls) return next.handle(req);
//     if (!this.checkUrl(url)) return next.handle(req);

//     let sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;

//     if (sendAccessToken) {
//       let token = this.authStorage.getItem('access_token');
//       let header = 'Bearer ' + token;

//       let headers = req.headers.set('Authorization', header);

//       req = req.clone({ headers });
//     }

//     return next
//       .handle(req)
//       .catch((err: any) => this.errorHandler.handleError(err));
//   }
// }
