import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WritingService } from '../writing.service';
import { Router } from '@angular/router';
import { SPEAKING_PATH } from 'src/app/app-routing.constants';

export class EssayText {
  writingText: string = '';
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [WritingService],
})
export class InputComponent implements OnInit {
  charactersLimit: number = environment.CHARACTERS_LIMIT;

  essayTextModel: EssayText = new EssayText();

  constructor(private writingService: WritingService, private router: Router) {}
  ngOnInit(): void {}

  onEssaySubmit(essayText: NgForm) {
    this.essayTextModel.writingText = essayText.controls['essay'].value;

    this.writingService.postEssay(this.essayTextModel).subscribe(
      (res: any) => {
        this.router.navigate([SPEAKING_PATH]);
      },
      (error) => {
        console.log('Something went wrong.');
      }
    );
  }
}
