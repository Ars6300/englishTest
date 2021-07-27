import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking-block',
  templateUrl: './speaking-block.component.html',
  styleUrls: ['./speaking-block.component.scss'],
})
export class SpeakingBlockComponent implements OnInit {
  audio!: HTMLAudioElement;

  disabledAudio: boolean = false;

  play = false;

  playAudio() {
    this.play = true;
    this.audio = new Audio();
    this.audio.play();
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
  constructor() {}

  ngOnInit(): void {}
}
