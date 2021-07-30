import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsEditComponent } from './questions-edit.component';
import { QuestionsTableComponent } from './questions-table/questions-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/shared/utils/utils';

@NgModule({
  declarations: [QuestionsEditComponent, QuestionsTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
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
  exports: [QuestionsEditComponent, QuestionsTableComponent]
})
export class QuestionsEditModule { }
