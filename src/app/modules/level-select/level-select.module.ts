import { SharedModule } from 'src/app/shared/shared.module';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelSelectRoutingModule } from './level-select-routing.module';
import { SelectLevelComponent } from './level-select.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/utils';

@NgModule({
  declarations: [SelectorsComponent, SelectLevelComponent],
  exports: [SelectorsComponent],
  imports: [
    CommonModule,
    LevelSelectRoutingModule,
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
})
export class LevelSelectModule {}
