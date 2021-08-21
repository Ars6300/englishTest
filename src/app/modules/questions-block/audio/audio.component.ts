import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/models/questions.model';
import { ErrorService } from 'src/app/core/services/error.service';
import { TestDataState } from 'src/app/redux/models/tests.state.model';
import { getTestId } from 'src/app/redux/selectors/tests.selectors';
import { QuestionsLoadingService } from '../questions-loading.service';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  audio!: HTMLAudioElement;

  play: boolean = false;

  tryCount: number = 3;

  counter: number = 0;
  canPlay: boolean = true;
  audioSrc: any;
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;
  testId$ = this.store.select(getTestId);

  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private errorService: ErrorService,
    private store: Store<TestDataState>
  ) {}

  playAudio() {
    this.getAudioSrc();

    this.audio = new Audio();
    const but = document.querySelector('.microfone');
    const playingAudio = this.audio;
    playingAudio.onended = () => {
      but!.classList.remove('button-disabled');
      this.play = false;
      if (this.tryCount === this.counter) {
        but!.classList.add('button-disabled');
        this.canPlay = false;
      }
    };

    if (this.tryCount === this.counter || this.play) {
      but!.classList.add('button-disabled');
      this.canPlay = false;
    } else {
      this.play = true;
      this.audio.play();
      but!.classList.add('button-disabled');

      this.questionsLoadingService
        // .audioTriesCheck(this.audioSrc.audioId, this.tryCount, this.canPlay)
        .audioTriesCheck(this.audioSrc.audioId, this.tryCount, this.canPlay)
        .subscribe(
          (res: any) => {
            console.log(res);
          },
          (error) => {
            this.errorService.logError(error || 'Something went wrong');
          }
        );
      --this.tryCount;
    }
  }

  ngOnInit() {
    this.questionsLoadingService.getQuestions().subscribe((questions$) => {
      this.questionsList = questions$;
    });
    this.audioSrc = this.getAudioId();
  }

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
