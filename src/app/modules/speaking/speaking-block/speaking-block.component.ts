// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
// import { SpeakingService } from 'src/app/core/services/speaking/speaking.service';
// import { environment } from 'src/environments/environment';
// import { AudioRecordingService } from '../audio-recording.service';

// @Component({
//   selector: 'app-speaking-block',
//   templateUrl: './speaking-block.component.html',
//   styleUrls: ['./speaking-block.component.scss'],
// })
// export class SpeakingBlockComponent implements OnInit, OnDestroy {
//   isRecording = false;
//   recordedTime: any;
//   blobUrl: any;
//   maximumTime: string = environment.SPEAKING_TIME;
//   blobPost: any;
//   blobData: any;

//   constructor(
//     private audioRecordingService: AudioRecordingService,
//     private sanitizer: DomSanitizer,
//     private speakingService: SpeakingService
//   ) {
//     this.audioRecordingService.recordingFailed().subscribe(() => {
//       this.isRecording = false;
//     });

//     this.audioRecordingService.getRecordedTime().subscribe((time) => {
//       this.recordedTime = time;
//       if (time === this.maximumTime) {
//         this.stopRecording();
//       }
//     });

//     this.audioRecordingService.getRecordedBlob().subscribe((data) => {
//       this.blobPost = data.blob;

//       this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
//         URL.createObjectURL(data.blob)
//       );
//     });
//   }

//   ngOnInit(): void {}

//   startRecording() {
//     if (!this.isRecording) {
//       this.isRecording = true;
//       this.audioRecordingService.startRecording();
//     }
//   }

//   abortRecording() {
//     if (this.isRecording) {
//       this.isRecording = false;
//       this.audioRecordingService.abortRecording();
//     }
//   }

//   stopRecording() {
//     if (this.isRecording) {
//       this.audioRecordingService.stopRecording();
//       this.isRecording = false;
//     }
//     // console.log(this.blobUrl)
//   }

//   clearRecordedData() {
//     this.blobUrl = null;
//   }

//   onGetLink() {

//     this.speakingService.uploadFile(this.blobPost)

//   }

//   ngOnDestroy(): void {
//     this.abortRecording();
//   }
// }

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
  blobPost: any

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private speakingService: SpeakingService,
    private questionsLoadingService: QuestionsLoadingService,
    private router: Router,
    private questionStore: Store<QuestionsState>,
    private errorService: ErrorService
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
      this.blobPost = data.blob
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
    console.log(this.moduleQuestion, this.moduleAnswer);
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
    console.log(this.blobUrl);
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  onGetLink() {
    this.speakingService.uploadFile(this.blobPost)
    .then(res => console.log(res))
  }

  getBlobId() {
    let postFile = this.blobUrl;
    return `${
      postFile.changingThisBreaksApplicationSecurity.split('/')[3]
    }.wav`;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  getQuestionsByType() {
    return this.questionsList.filter((el) => el.type === this.currentType);
  }
}
