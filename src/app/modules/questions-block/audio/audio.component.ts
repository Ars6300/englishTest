import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent {
  audio!: HTMLAudioElement;

  disabledAudio: boolean = false;

  play = false;

  tryCount: number = 0;

  playAudio() {
    this.play = true;
    this.audio = new Audio(
      'https://zvukogram.com/index.php?r=site/download&id=38307'
    );
    this.audio.play();
    this.play = false;
    ++this.tryCount;
    if (this.tryCount > 2) {
      this.disabledAudio = true;
    }
  }
}
