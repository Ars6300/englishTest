import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/shared/utils/utils';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
//import { UserEffects } from 'src/app/redux/effects/users-admin.effects';

@NgModule({
  declarations: [UsersAdminComponent],
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
    /* UserEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [UserEffects],
    }, */
  ],
  exports: [UsersAdminComponent],
})
export class UsersAdminModule {}
