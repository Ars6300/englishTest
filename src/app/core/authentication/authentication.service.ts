import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { tap } from 'rxjs/operators';
import {
  deleteCookieParams,
  setCookieParams,
} from 'src/app/shared/utils/cookies';
import { environment } from 'src/environments/environment';

export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnInit {
  constructor(
    private http: HttpClient, 
    private router: Router, 
    public oidcSecurityService: OidcSecurityService) {
      console.log(this.token[1]);
      
  }
  ngOnInit(){
    
  }
 
  // login(email: string, password: string) {
  //   const user = {
  //     email,
  //     password,
  //   };
  //   return this.http
  //     .post(`${environment.api_URL}/api/users`, user)
  //     .pipe(tap(this.setCookies));
  // }
  

  // private setCookies(response: any) {
    
  //   if (response) {
  //     setCookieParams(TOKEN, response.token, environment.COOKIE_KEEP_SECONDS);
  //   }
  // }
 

  deleteCookie() {
    deleteCookieParams();
  }

  get token() {
    return document.cookie
      .split(';').map(el => el.startsWith('token') === true ? '' : this.splitCookie(el))
  }

  splitCookie(cookie: string) {
    return cookie.split('=')[1];
  }

  isAuthenticated() {
    return !!this.token;
  }
}

// https://localhost:4200/profile#id_token= eyJhbGciOiJSUzI1NiIsImtpZCI6IjExRDNENEZFNzI1RUI5RjJBMTBCQTE3QjVGQ0ZGRkQ5IiwidHlwIjoiSldUIn0.eyJuYmYiOjE2MjkxOTQ0NTEsImV4cCI6MTYyOTE5NDc1MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6ImNsaWVudF90eWUiLCJub25jZSI6IlZqUlFaMlY0UlVONGRYNWlhR28wUW5sbGZtbEhibUV5Vnpac09IZHhla3RJWkZCVVMwMVdWbE5GVmxCaiIsImlhdCI6MTYyOTE5NDQ1MSwic19oYXNoIjoiTktFeDFaTUhtMkxONl8yc3N4ckhzQSIsInNpZCI6IjAzMjNFMEQyRUMzNTBERjQ5RUE3QTNFNDU5MUYyN0I4Iiwic3ViIjoiYTNmZTc5MjItNGU1ZC00MDE0LWE1ZmQtZDg5N2ViMjQxZjQxIiwiYXV0aF90aW1lIjoxNjI5MTk0NDUxLCJpZHAiOiJsb2NhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiYW1yIjpbInB3ZCJdfQ.l0BGYfK17rYcsIeMwdrygNlqQRNeKH6SVvIIce1XnBjTJFdoUMXnkk_yQ1PpO_4GdGsG5Hdq5oAgvlfvv5cQuf8HNzM45GTxbvKUrsRbmZvf0ppOV2C4BRSqiC3zoXw7uBLHaSsZFkKPBadOQd36YmoPKK_Ix20F_3B5ruuwl0oXlb7ai49MGGZIEuhla4-xBotuq9dhMr2F3C1AjzzELaH6G3ohizBhIq2Oyc_9vP15cO6lZ8Y_aWRqQHwVzImrNKrSXMZai9NUtcT9qYLkUh5UyPrb80fM1tdRGI9DiCrXJrLcLDiotiEwN4FqDwTrRO0U2STuedGcfNhnWjoFHg



// &scope=openid%20profile&state=VjRQZ2V4RUN4dX5iaGo0QnllfmlHbmEyVzZsOHdxektIZFBUS01WVlNFVlBj&session_state=qMonEqFDYJ3WulHOaWLuJRI6N9vcNolWrFzBmy-wJPM.D21E3501E0CAD8D4E79FD7293017B987