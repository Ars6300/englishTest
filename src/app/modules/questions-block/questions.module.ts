import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { QuestionComponent } from 'src/app/pages/question/question.component';
import { QuestionsBlockComponent } from './questions-block/questions-block.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';

import { QuestionEffects } from 'src/app/redux/effects/questions.effects';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppSerializer } from './questions-block/serializer';
import { GrammarQuestion } from '../../core/models/query-types-class';

import { GRAMMAR_PATH, LISTENING_PATH } from 'src/app/app-routing.constants';

import { AudioComponent } from './audio/audio.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/shared/utils/utils';
import { QuestionsEditModule } from 'src/app/pages/questions-edit/questions-edit.module';

const routes: Routes = [
  {
    path: GRAMMAR_PATH,
    component: QuestionsBlockComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: LISTENING_PATH,
    component: QuestionsBlockComponent,
    //canActivate: [AuthGuard],
  },
];

export const grammar = new GrammarQuestion();
@NgModule({
  declarations: [QuestionComponent, QuestionsBlockComponent, AudioComponent],
  imports: [
    CommonModule,
    MatIconModule,
    QuestionsEditModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreRouterConnectingModule.forRoot({
      serializer: AppSerializer,
    }),
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
  providers: [
    QuestionEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [QuestionEffects],
    },
  ],
  exports: [QuestionComponent, QuestionsBlockComponent, AudioComponent],
})
export class QuestionsModule {}
