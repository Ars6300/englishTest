import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(private http: HttpClient) { }


  getTests(userId: any, engLevel: any){
    return this.http.post(`${environment.api_URL}/create?UserId=${userId}&EnglishLevel=${engLevel}`, {})
  }
  // https://localhost:44356/create?UserId=991d1573-2143-4855-b313-b74800a8d31d&EnglishLevel=c1
}
