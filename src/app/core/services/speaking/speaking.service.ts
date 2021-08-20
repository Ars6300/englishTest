import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { QuestionsLoadingService } from 'src/app/modules/questions-block/questions-loading.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeakingService {
  constructor(private http: HttpClient, private questionsLoadingService: QuestionsLoadingService) {}

  uploadFile(blob: any) {
    // let file = new File([blob], 'audio', { lastModified: new Date().getTime(), type: blob.type });
    // const formData = new FormData();
    // formData.append("uploadedFile", file);


    // fetch(`${environment.api_URL}/api/audio`, {method: "POST", body: formData})
    //   .then(res => res.json())
    //   .then(result => result.audioId)
    //   .catch(e => console.log(e))
  }

  postTopic(id: string, answerId: string) {
    return this.http
      .post<any>(`${environment.api_URL}/api/userAnswer/topic`, {
        id,
        answerId

      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  
  
}

