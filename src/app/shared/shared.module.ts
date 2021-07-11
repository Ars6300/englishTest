import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { SafePipe } from './pipes/safe.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthDirective } from './directives/auth.directive';

import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonsStylingDirective } from './directives/buttons-styling.directive';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    LanguageSelectComponent,
    SafePipe,
    CapitalizePipe,
    AuthDirective,
    ButtonComponent,
    ButtonsStylingDirective,
    TimerComponent,
  ],
  imports: [CommonModule],
  exports: [ButtonComponent, ButtonsStylingDirective, TimerComponent],
})
export class SharedModule {}
