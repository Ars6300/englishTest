import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpeakingService } from 'src/app/core/services/speaking/speaking.service';
import { environment } from 'src/environments/environment';
import { AudioRecordingService } from '../audio-recording.service';

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

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private speakingService: SpeakingService
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
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data.blob)
      );
    });
  }

  ngOnInit(): void {}

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
    // TODO: create file wav with blobUrl
    let downLoadFile = this.getBlobId();
    // let downLoadFile = this.getBlobId()

    this.speakingService.postAudioSpeaking(downLoadFile).subscribe((res) => {
      // console.log(res);
    });
    console.log(this.blobUrl);
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
}
