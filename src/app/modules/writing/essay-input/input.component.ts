import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  charactersLimit: number= environment.CHARACTERS_LIMIT
  constructor() {}

  ngOnInit(): void {}

  onEssaySubmit(essayText: NgForm) {
    console.log(essayText.value);
    console.log(essayText.controls['essay'].value);
  }
}
