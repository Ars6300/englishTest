import { StorageService } from './../../../core/services/storage.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewChecked,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Question } from 'src/app/core/models/questions.model';
import { ErrorService } from 'src/app/core/services/error.service';
import { QuestionsLoadingService } from '../questions-loading.service';
import { State } from 'src/app/redux/models/app.state';
import { getTestId } from 'src/app/redux/selectors/tests.selectors';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit, OnDestroy, AfterViewChecked {
  audio!: HTMLAudioElement;
  @ViewChild('microphone') microphone!: ElementRef;

  tryCount!: number;
  audioSrc: any;
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;
  getTestId$ = this.store.select(getTestId);
  testId: string = '';
  questionsSubsc!: Subscription;

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private errorService: ErrorService,
    private store: Store<State>,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.questionsSubsc = this.questionsLoadingService
      .getQuestions()
      .subscribe((questions$) => {
        this.questionsList = questions$;
      });
    this.audioSrc = this.getAudioId();
    this.getTestId$.pipe(take(1)).subscribe((id) => (this.testId = id));
    this.tryCount = this.storage.getItem('audioTryCount') || 0;
  }

  ngAfterViewChecked(): void {
    if (this.tryCount == 0 || this.storage.getItem('audioPlaying')) {
      this.editButton.disableButton();
    }
  }

  ngOnDestroy(): void {
    if (this.questionsSubsc) {
      this.questionsSubsc.unsubscribe();
    }
  }

  playAudioClick() {
    this.editButton.disableButton();
    this.getAudioSrc();

    this.audio = new Audio();

    const playingAudio = this.audio;

    if (this.tryCount > 0 || !this.storage.getItem('audioPlaying')) {
      this.storage.setItem('audioPlaying', true);
      this.audio.play();
      --this.tryCount;
      this.storage.setItem('audioTryCount', this.tryCount);
    }

    playingAudio.onended = () => {
      this.storage.setItem('audioPlaying', false);
      if (this.tryCount > 0) {
        this.editButton.enableButton();
      }
    };
  }

  editButton = {
    disableButton: () => {
      this.microphone.nativeElement.classList.add('button-disabled');
    },
    enableButton: () => {
      this.microphone.nativeElement.classList.remove('button-disabled');
    },
  };

  getAudioId() {
    return this.questionsList.find((el) => el.audioId);
  }

  getAudioSrc() {
    this.questionsLoadingService.downloadAudio(this.audioSrc.audioId).subscribe(
      (audio) => {
        const url = window.URL.createObjectURL(audio);
        this.audio.src = url;
      },
      (error) => {
        this.errorService.logError(
          `Error downloading: ${error}` || 'Something went wrong'
        );
      }
    );
  }
}
