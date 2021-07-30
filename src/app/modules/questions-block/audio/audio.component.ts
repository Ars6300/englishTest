import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  audio!: HTMLAudioElement;

  disabledAudio: boolean = false;

  play = false;

  tryCount: number = 0;

  constructor() {}

  playAudio() {
    this.play = true;
    this.audio = new Audio(
      'https://zvukogram.com/index.php?r=site/download&id=38307'
    );
    this.audio.play();
    ++this.tryCount;
    if (this.tryCount > 2) {
      let player = document.getElementsByClassName('player')[0];
      player.classList.add('hidden');
    }
  }

  stopAudio() {
    this.play = false;
    this.audio.pause();
  }

  getTime(time: number) {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  }

  ngOnInit() {
  }
}
