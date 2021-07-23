import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingRoutingModule } from './writing-routing.module';
import { WritingComponent } from './writing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputComponent } from './components/input/input.component';
import { WritingQuestion } from 'src/app/core/models/query-types-class';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/shared/utils/utils';

export const writing = new WritingQuestion();
@NgModule({
  declarations: [
    WritingComponent,
    InputComponent
  ],
  imports: [
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
  ]
})
export class WritingModule { }
