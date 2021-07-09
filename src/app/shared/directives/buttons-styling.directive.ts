import { Directive, ElementRef } from '@angular/core';

export type ButtonType = 'primary' | 'default' | 'danger' | null;

@Directive({
  selector: '[appButtonsStyling]',
})
export class ButtonsStylingDirective {
  constructor(private el: ElementRef) {
    let btnType = this.el.nativeElement.attributes.buttontype.nodeValue;
    switch (btnType) {
      case 'primary': this.setColors('#7ad2f4'); break;
      case 'danger': this.setColors('red'); break;
      case 'default':
      default: this.setColors('transparent', '#545454');
    }
  }

  setColors(bkgColor: string, color: string = 'initial') {
    this.el.nativeElement.style.backgroundColor = bkgColor;
    this.el.nativeElement.style.color = color;
  }
}
