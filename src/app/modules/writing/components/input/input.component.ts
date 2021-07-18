import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onEssaySubmit(essayText: NgForm) {
    console.log(essayText.value);
    console.log(essayText.controls['essay'].value);
  }
}
