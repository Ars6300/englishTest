import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeakingService {
  constructor(private http: HttpClient) {}

  async uploadFile(blob: any) {
    let file = new File([blob], 'audio', { lastModified: new Date().getTime(), type: blob.type });
    const formData = new FormData();
    formData.append("uploadedFile", file);


    fetch(`${environment.api_URL}/api/audio`, {method: "POST", body: formData})
      .then(res => res.json())
      .then(result => {
        return result.audioId
      })
      .catch(e => console.log(e))
  }
}

