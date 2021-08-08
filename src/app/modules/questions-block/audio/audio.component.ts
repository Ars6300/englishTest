import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/models/questions.model';
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
  audioSrc: any;
  questionsList: Question[] = [];
  questions$: Observable<Question[]> | undefined;

  constructor(private questionsLoadingService: QuestionsLoadingService) {}

  playAudio() {
    this.getAudioSrc();

    this.audio = new Audio();
    const but = document.querySelector('.microfone');
    const playingAudio = this.audio;
    playingAudio.onended = () => {
      but!.classList.remove('button-disabled');
      this.play = false;
    };

    if (this.tryCount === this.counter || this.play) {
      but!.classList.add('button-disabled');
    } else {
      this.play = true;
      this.audio.play();
      --this.tryCount;

      but!.classList.add('button-disabled');
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
        console.log('error downloading: ', error);
      }
    );
  }
}
