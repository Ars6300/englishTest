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
} from './app-routing.constants';
import { AuthGuard } from './core/guard/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: LOGIN_PATH,
    loadChildren: () => import(LOGIN_MODULE).then((m) => m.LoginModule),
  },
  {
    path: PROFILE_PATH,
    loadChildren: appRoutingLoadChildren.profileModule,
  },
  {
    path: SELECT_LEVEL_PATH,
    loadChildren: () =>
      import(SELECT_LEVEL_MODULE).then((m) => m.LevelSelectModule),
  },
  {
    path: GRAMMAR_PATH,
    loadChildren: () => import(GRAMMAR_MODULE).then((m) => m.GrammarModule),
  },
  {
    path: WRITING_PATH,
    loadChildren: () => import(WRITING_MODULE).then((m) => m.WritingModule),
  },
  {
    path: LISTENING_PATH,
    loadChildren: () => import(LISTENING_MODULE).then((m) => m.ListeningModule),
  },
  {
    path: SPEAKING_PATH,
    loadChildren: () => import(SPEAKING_MODULE).then((m) => m.SpeakingModule),
  },
  {
    path: RESULT_PATH,
    loadChildren: () => import(RESULT_MODULE).then((m) => m.ResultModule),
  },
  {
    path: ERROR_PATH,
    component: ErrorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: `/${ERROR_PATH}`,
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
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
