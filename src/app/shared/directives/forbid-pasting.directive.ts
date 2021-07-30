import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appForbidPasting]',
})
export class ForbidPastingDirective {
  constructor() {}

  @HostListener('paste', ['$event']) onPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(e: KeyboardEvent) {
    e.preventDefault();
  }
}
