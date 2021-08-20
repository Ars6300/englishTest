import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class AudioComponent implements OnInit {
  audio!: HTMLAudioElement;

  play: boolean = false;

  tryCount: number = 3;

  counter: number = 0;
  canPlay: boolean = true;
  audioSrc: any;
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;
  getTestId$ = this.store.select(getTestId);
  testId: string = '';
  constructor(
    private questionsLoadingService: QuestionsLoadingService,
    private errorService: ErrorService,
    private store: Store<State>
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
    this.getTestId$.pipe(take(1)).subscribe((id) => (this.testId = id));
    console.log(this.testId);
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
        console.log('error downloading: ', error);
      }
    );
  }
}
