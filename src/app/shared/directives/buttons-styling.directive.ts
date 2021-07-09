import { Directive, ElementRef } from '@angular/core';

export type ButtonType = 'primary' | 'default' | 'danger' | null;

@Directive({
  selector: '[appButtonsStyling]',
})
export class ButtonsStylingDirective {
  constructor(private el: ElementRef) {
    let btnType = this.el.nativeElement.attributes.buttontype.nodeValue;
    if (btnType === 'primary') {
      this.el.nativeElement.style.backgroundColor = '#7ad2f4';
    } else if (btnType === 'default') {
      this.el.nativeElement.style.backgroundColor = 'transparent';
      this.el.nativeElement.style.color = '#545454';
    } else if (btnType === 'danger') {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
