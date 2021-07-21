import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router
  ){
    console.log((this.token));
  }

  login(user: { email: any; password: any; }){
    return this.http.post(environment.api_URL, user)
    .pipe(
      tap(this.setCookies)
    )
  }

  private setCookies(response: any){
    if (response) {
      document.cookie = `token=${response.token}; max-age=3600`;
    }
  }

  deleteCookie(){
    document.cookie = `test=test; max-age=-1`;
  }

  get token(){
    const cookieDate = document.cookie
    if (!!cookieDate) {
      return cookieDate.split(';').find((cookie) => {
        return cookie.startsWith('token')
      })
    }
    return this.deleteCookie()
  }

  isAuthenticated(){
    return !!this.token
  }

}