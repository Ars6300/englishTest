import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { SafePipe } from './pipes/safe.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthDirective } from './directives/auth.directive';
import { DangerButtonComponent } from './components/buttons/danger-button/danger-button.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';



@NgModule({
  declarations: [
    LanguageSelectComponent,
    SafePipe,
    CapitalizePipe,
    AuthDirective,
    DangerButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
