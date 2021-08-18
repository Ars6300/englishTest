import { ErrorComponent } from './../pages/error/error.component';
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
import { FooterComponent } from './components/footer/footer.component';
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
import { UsersHrModule } from '../pages/users-hr/users-hr.module';
import { UsersAdminModule } from '../pages/users-admin/users-admin.module';
import {
  GRAMMAR_PATH,
  LISTENING_PATH,
  SPEAKING_PATH,
  WRITING_PATH,
} from '../app-routing.constants';
import { UsersCoachModule } from '../pages/users-coach/users-coach.module';
import { RegisterComponent } from '../account/register/register.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
const routes: Routes = [
  { path: GRAMMAR_PATH, component: GrammarComponent, canActivate: [AuthGuard] },
  {
    path: LISTENING_PATH,
    component: ListeningComponent,
    canActivate: [AuthGuard],
  },
  { path: WRITING_PATH, component: WritingComponent, canActivate: [AuthGuard] },
  {
    path: SPEAKING_PATH,
    component: SpeakingComponent,
    canActivate: [AuthGuard],
  },
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
    FooterComponent,
    ThemeComponent,
    ForbidPastingDirective,
    ErrorComponent,
    RegisterComponent,
    ResultItemComponent,
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
    UsersHrModule,
    UsersAdminModule,
    UsersCoachModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    QuestionsModule,
    UsersHrModule,
    UsersAdminModule,
    MaterialModule,
    CountdownModule,
    ThemeComponent,
    UsersHrModule,
    UsersCoachModule,
    ButtonsStylingDirective,
    TimerComponent,
    HeaderComponent,
    LeftLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ForbidPastingDirective,
    ErrorComponent,
    ResultItemComponent,
  ],
})
export class SharedModule {}
