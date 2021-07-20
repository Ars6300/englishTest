import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LOGIN_PATH } from 'src/app/app-routing.constants';
import { HttpLoaderFactory } from 'src/app/app.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { MissingTranslationService } from 'src/app/utils';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: LOGIN_PATH, component: LoginComponent },
  { path: '', component: LoginComponent },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],
})
export class LoginModule {}
