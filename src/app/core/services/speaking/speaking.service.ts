import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeakingService {

  constructor(private http: HttpClient) { }
  
  
  postAudioSpeaking(audioSpeaking: any){
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data'});
    let body = { filename: audioSpeaking };
    return this.http.post(`${environment.api_URL}/api/Audio/create`, body, { headers, responseType: 'blob' })
  }


}


