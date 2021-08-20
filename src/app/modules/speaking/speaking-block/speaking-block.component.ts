import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/models/questions.model';
import { SpeakingService } from 'src/app/core/services/speaking/speaking.service';
import { environment } from 'src/environments/environment';
import { AudioRecordingService } from '../audio-recording.service';
import { getQuestions } from 'src/app/redux/selectors/questions.selectors';
import { QuestionsLoadingService } from '../../questions-block/questions-loading.service';
import { QuestionType } from 'src/app/core/models/test.model';
import { ErrorService } from 'src/app/core/services/error.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { QuestionsState } from 'src/app/redux/models/questions.state.model';
import { HttpClient } from '@angular/common/http';
import { filter, take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-speaking-block',
  templateUrl: './speaking-block.component.html',
  styleUrls: ['./speaking-block.component.scss'],
})
export class SpeakingBlockComponent implements OnInit, OnDestroy {
  isRecording = false;
  recordedTime: any;
  blobUrl: any;
  maximumTime: string = environment.SPEAKING_TIME;

  question: Question[] = [];
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;

  listeningType = Number(QuestionType.Speaking);

  currentType: number = 0;

  condition: boolean = false;

  moduleQuestion: string = '';
  moduleAnswer: string = '';
  postAnswer: string = '';
  blobPost: any;

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private speakingService: SpeakingService,
    private questionsLoadingService: QuestionsLoadingService,
    private questionStore: Store<QuestionsState>,
    private http: HttpClient,
    private auth: AuthenticationService
  ) {
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
      if (time === this.maximumTime) {
        this.stopRecording();
      }
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobPost = data.blob;
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data.blob)
      );
    });
  }

  ngOnInit(): void {
    this.questions$ = this.questionStore.select(getQuestions);

    this.currentType = this.listeningType;

    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
      this.question = this.getQuestionsByType();
      this.moduleAnswer = this.question[0].userAnswerId;
    });
  }

  selectTheme(event: { target: any }) {
    this.condition = true;
    this.moduleQuestion = event.target.id;
    this.speakingService
      .postTopic(this.moduleAnswer, this.moduleQuestion)
      .subscribe(
        (res: any) => {},
      );
  }

  showButton(id: string) {
    if (this.condition) {
      return this.moduleQuestion == id;
    }
    return true;
  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  onGetLink() {
    // this.speakingService.uploadFile(this.blobPost)
    let file = new File([this.blobPost], 'audio', { lastModified: new Date().getTime(), type: this.blobPost.type });
    const formData = new FormData();
    formData.append("uploadedFile", file);

    let text = 'text'

    fetch(`${environment.api_URL}/api/audio?AudioDescription=${text}`, {method: "POST", body: formData,
      headers: {
        Authorization: `Bearer ${this.auth.token[1]}`
      }
    })
      .then(res => res.json())
      .then(result => {
        this.onPostAnswer(result.audioId)
        return this.http.get(`${environment.api_URL}/api/audio/id?audioId=${result.audioId}`, {responseType: 'blob'})
        .subscribe(response => {
          console.log(response);
        })
        
      })
      .catch(e => console.log(e))
}
  
  
  onPostAnswer(audioId: any) {
    this.questionsLoadingService
      .postAnswer(this.moduleAnswer, audioId)
      .subscribe(
        (res: any) => {},
      );
  }





  ngOnDestroy(): void {
    this.abortRecording();
  }

  getQuestionsByType() {
    return this.questionsList.filter((el) => el.type === this.currentType);
  }
}
