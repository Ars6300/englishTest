import { LeftLayoutComponent } from './components/left-layout/left-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { SafePipe } from './pipes/safe.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthDirective } from './directives/auth.directive';

import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonsStylingDirective } from './directives/buttons-styling.directive';
import { TimerComponent } from './components/timer/timer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LanguageSelectComponent,
    LeftLayoutComponent,
    SafePipe,
    CapitalizePipe,
    AuthDirective,
    ButtonComponent,
    ButtonsStylingDirective,
    TimerComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    ButtonsStylingDirective,
    TimerComponent,
    LeftLayoutComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
