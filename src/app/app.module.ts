import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LevelSelectModule } from './modules/level-select/level-select.module';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationService } from './shared/utils/utils';
import { QuestionsLoadingService } from './modules/questions-block/questions-loading.service';
import { AuthInterceptor } from './core/interceptor/auth-interceptor/auth-interceptor';
import { ReduxModule } from './redux/redux.module';
import { QuestionsSyncService } from './core/services/questions-sync.service';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AudioRecordingService } from './modules/speaking/audio-recording.service';
import { UsersHrService } from './pages/users-hr/users-hr.service';
import { UsersAdminService } from './pages/users-admin/users-admin.service';
import { HttpErrorInterceptor } from './core/interceptor/error-interceptor/http-error.interceptor';
import { WritingService } from './modules/writing/writing.service';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LevelSelectModule,
    HttpClientModule,
    ReduxModule,
    CoreModule,
    TranslateModule.forRoot({
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
    NoopAnimationsModule,
  ],
  providers: [
    QuestionsLoadingService,
    QuestionsSyncService,
    AudioRecordingService,
    UsersHrService,
    UsersAdminService,
    WritingService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
