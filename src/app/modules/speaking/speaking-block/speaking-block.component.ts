import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  maximumTime: string = '05:00';

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer
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
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  onGetLink() {
    console.log(this.blobUrl);
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }
}