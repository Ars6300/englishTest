import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

import { LoginModule } from './pages/login/login.module';
import { LevelSelectModule } from './modules/level-select/level-select.module';
import { GrammarModule } from './modules/grammar/grammar.module';
import { ListeningModule } from './modules/listening/listening.module';
import { WritingModule } from './modules/writing/writing.module';
import { SpeakingModule } from './modules/speaking/speaking.module';
import { ResultModule } from './modules/result/result.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SharedModule } from './shared/shared.module';

import {
  PROFILE_PATH,
  ERROR_PATH,
  GRAMMAR_PATH,
  GRAMMAR_MODULE,
  LISTENING_PATH,
  LISTENING_MODULE,
  LOGIN_PATH,
  LOGIN_MODULE,
  SELECT_LEVEL_PATH,
  SELECT_LEVEL_MODULE,
  SPEAKING_PATH,
  SPEAKING_MODULE,
  RESULT_MODULE,
  RESULT_PATH,
  WRITING_PATH,
  WRITING_MODULE,
  appRoutingLoadChildren,
  ACCOUNT_PATH,
} from './app-routing.constants';
import { AuthGuard } from './core/guard/auth-guard/auth.guard';
import { AccountModule } from './account/account.module';

const routes: Routes = [
  {
    path: LOGIN_PATH,
    loadChildren: appRoutingLoadChildren.loginModule,
  },
  {
    path: PROFILE_PATH,
    loadChildren: appRoutingLoadChildren.profileModule,
  },
  {
    path: SELECT_LEVEL_PATH,
    loadChildren: appRoutingLoadChildren.selectLevelModule,
  },
  {
    path: GRAMMAR_PATH,
    loadChildren: appRoutingLoadChildren.grammarModule,
  },
  {
    path: WRITING_PATH,
    loadChildren: () => import(WRITING_MODULE).then((m) => m.WritingModule),
  },
  {
    path: LISTENING_PATH,
    loadChildren: appRoutingLoadChildren.listeningModule,
  },
  {
    path: SPEAKING_PATH,
    loadChildren: appRoutingLoadChildren.speakingModule,
  },
  {
    path: RESULT_PATH,
    loadChildren: appRoutingLoadChildren.resultModule,
  },
  {
    path: ACCOUNT_PATH,
    loadChildren: appRoutingLoadChildren.accountModule
  },
  {
    path: PROFILE_PATH,
    component: ErrorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: `${PROFILE_PATH}`,
  },
];
@NgModule({
  imports: [
    LoginModule,
    LevelSelectModule,
    GrammarModule,
    ListeningModule,
    WritingModule,
    SpeakingModule,
    SharedModule,
    ProfileModule,
    ResultModule,
    AccountModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
