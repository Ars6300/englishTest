import { ProfileResultsEffects } from './effects/profile-results.effect';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { QuestionEffects } from './effects/questions.effects';
import * as fromQuestions from '../redux/reducers/questions.reducers';
import * as fromProfileResultSelectors from './selectors/profile-results.selectors';
import * as fromProfileResults from './reducers/profile-results.reducer';
@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([QuestionEffects, ProfileResultsEffects]),
    StoreModule.forFeature(
      fromProfileResultSelectors.featureKey,
      fromProfileResults.reducer
    ),
    StoreModule.forFeature(
      fromQuestions.questionsFeatureKey,
      fromQuestions.questionListReducer
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
  ],
})
export class ReduxModule {}
