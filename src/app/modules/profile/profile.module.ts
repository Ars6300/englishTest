import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultsComponent } from './components/results/results.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { MissingTranslationService } from 'src/app/utils';

@NgModule({
  declarations: [
    NotificationsComponent,
    ProfileComponent,
    ResultsComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
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
export class ProfileModule {}
