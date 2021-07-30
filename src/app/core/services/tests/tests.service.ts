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
}
