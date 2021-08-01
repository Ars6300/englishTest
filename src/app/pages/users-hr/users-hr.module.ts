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
import { UserEffects } from 'src/app/redux/effects/users-hr.effects';
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
  providers: [
    UserEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [UserEffects],
    },
  ],
  exports: [UsersHrComponent],
})
export class UsersHrModule {}
