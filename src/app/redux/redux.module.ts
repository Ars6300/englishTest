import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { QuestionEffects } from './effects/questions.effects';
import * as fromQuestions from '../redux/reducers/questions.reducers'
import { authFeatureKey, authReducer } from './reducers/user.reducers';
import { AuthEffects } from './effects/user.effects';
import { State } from 'src/app/state/app.state'
import { localStorageSync } from 'ngrx-store-localstorage';

const reducers: ActionReducerMap<State> = {
  auth: authReducer
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: ['auth'],
    rehydrate: true,
  })(reducer)
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      reducers,
      {metaReducers}
    ),
    EffectsModule.forRoot([QuestionEffects, AuthEffects]),
    StoreModule.forFeature(fromQuestions.questionsFeatureKey, fromQuestions.questionListReducer),
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
  ],
})
export class ReduxModule {}
