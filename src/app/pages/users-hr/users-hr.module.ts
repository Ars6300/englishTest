import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MissingTranslationService } from 'src/app/shared/utils/utils';
import { UsersHrComponent } from './users-hr/users-hr.component';

@NgModule({
  declarations: [UsersHrComponent],
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
  providers: [],
  exports: [UsersHrComponent],
})
export class UsersHrModule {}
