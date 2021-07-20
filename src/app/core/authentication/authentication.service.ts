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
  ){}

  login(user: { email: any; password: any; }){
    // return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
    return this.http.post(environment.api_URL, user)
    .pipe(
      tap(this.controller)
    )
  }

  private controller(response: any){
    if (response) {
      // document.cookie = `token=${response.Idtoken}; max-age=3600`;
      document.cookie = `token=${response.token}; max-age=3600`;
    }
  }

  logout(){
    document.cookie = `test=test; max-age=-1`;
  }

  get token(){
    const cookieDate = document.cookie
    if (!!cookieDate) {
      return cookieDate.split('=')[1]
    }
    return this.logout()
  }

  isAuthenticated(){
    return !!this.token
  }

}