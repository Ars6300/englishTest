import { LeftLayoutComponent } from './components/left-layout/left-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { SafePipe } from './pipes/safe.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthDirective } from './directives/auth.directive';

import { ButtonsStylingDirective } from './directives/buttons-styling.directive';
import { TimerComponent } from './components/timer/timer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from '../pages/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { GrammarComponent } from '../modules/grammar/grammar.component';
import { ListeningComponent } from '../modules/listening/listening.component';
import { WritingComponent } from '../modules/writing/writing.component';
import { SpeakingComponent } from '../modules/speaking/speaking.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { MissingTranslationService } from './utils/utils';
import { QuestionsModule } from '../modules/questions-block/questions.module';
import { CountdownModule } from 'ngx-countdown';

import { AuthGuard } from '../core/guard/auth-guard/auth.guard';
import { MaterialModule } from './material/material.module';
import { ThemeComponent } from './components/theme-choose/theme/theme.component';
import { ForbidPastingDirective } from './directives/forbid-pasting.directive';

const routes: Routes = [
  { path: 'grammar', component: GrammarComponent, canActivate: [AuthGuard] },
  {
    path: 'listening',
    component: ListeningComponent,
    canActivate: [AuthGuard],
  },
  { path: 'writing', component: WritingComponent, canActivate: [AuthGuard] },
  { path: 'speaking', component: SpeakingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    LanguageSelectComponent,
    LeftLayoutComponent,
    SafePipe,
    CapitalizePipe,
    AuthDirective,
    ButtonsStylingDirective,
    TimerComponent,
    NavigationComponent,
    HeaderComponent,
    ProgressBarComponent,
    FooterComponent,
    ErrorComponent,
    ThemeComponent,
    ForbidPastingDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    QuestionsModule,
    MaterialModule,
    CountdownModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService,
      },
      useDefaultLang: false,
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    QuestionsModule,
    MaterialModule,
    CountdownModule,
    ButtonsStylingDirective,
    TimerComponent,
    HeaderComponent,
    ProgressBarComponent,
    LeftLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ForbidPastingDirective,
  ],
})
export class SharedModule {}
