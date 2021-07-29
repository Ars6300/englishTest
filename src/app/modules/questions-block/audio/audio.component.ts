import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AudioComponent implements OnInit {
  audio!: HTMLAudioElement;

  audioPlay: any;

  disabledAudio: boolean = false;

  /* play = false; */

  tryCount: number = 0;

  blobUrl: string = 'https://zvukogram.com/index.php?r=site/download&id=38307';

  audioTransition: any;

  constructor() {}

  /*   playAudio() {
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
  } */

  ngOnInit() {
    this.audioPlay = document.getElementById('audio');
    this.audioPlay.shadowRoot.querySelector("input[aria-label='pause']").setAttribute("visibility", "hidden");
    console.log(this.audioPlay);
  }

  onCheckIsPlaying(element: HTMLElement | null) {
    element = document.getElementById('audio');
  }
}

