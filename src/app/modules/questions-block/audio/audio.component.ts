import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  audio!: HTMLAudioElement;

  play: boolean = false;

  tryCount: number = 0;

  counter: number = 3;

  constructor() {}

  playAudio() {
    this.audio = new Audio(
      'https://zvukogram.com/index.php?r=site/download&id=38307'
    );
    const but = document.querySelector('.play-control');
    const playingAudio = this.audio;
    playingAudio.onended = () => {
      but!.classList.remove('button-disabled');
      this.play = false;
    };

    if (this.tryCount >= this.counter) {
      but!.classList.add('button-disabled');
      return;
    } else if (this.play === true) {
      return;
    } else {
      this.play = true;
      this.audio.play();
      ++this.tryCount;

      but!.classList.add('button-disabled');
    }
  }

  ngOnInit() {}
}
