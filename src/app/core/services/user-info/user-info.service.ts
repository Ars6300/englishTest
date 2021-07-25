import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient
  ) { }

 
  // getData(){
  //   return this.http.get('https://localhost:44356/api/User/profile?id=b43d0ac2-a9c3-47e0-90bc-862403ebaf22')
  // }

}
