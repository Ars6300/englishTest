import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  ru = 'ru';
  eng = 'eng';
  selectedRu = '';
  selectedEng = 'selected';

  constructor() { }

  changeLanguage(language: string){
    if(language === this.ru){
      this.selectedRu = 'selected'
      this.selectedEng = ''
    }else{
      this.selectedEng = 'selected'
      this.selectedRu = ''
    } 
    return console.log(language)
  }

  ngOnInit(): void {
  }

}
