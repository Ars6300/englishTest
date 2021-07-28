import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakingRoutingModule } from './speaking-routing.module';
import { SpeakingComponent } from './speaking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeakingQuestion } from 'src/app/core/models/query-types-class';
import { SpeakingBlockComponent } from './speaking-block/speaking-block.component';
import { WritingRoutingModule } from '../writing/writing-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/shared/utils/utils';
import { AudioRecordingService } from './audio-recording.service';

export const speaking = new SpeakingQuestion();
@NgModule({
  declarations: [SpeakingComponent, SpeakingBlockComponent],
  imports: [
    CommonModule,
    SpeakingRoutingModule,
    SharedModule,
    CommonModule,
    WritingRoutingModule,
    SharedModule,
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
  providers: [AudioRecordingService],
})
export class SpeakingModule {}
