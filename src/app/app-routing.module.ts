import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

import { LoginModule } from './pages/login/login.module';
import { LevelSelectModule } from './modules/level-select/level-select.module';
import { GrammarModule } from './modules/grammar/grammar.module';
import { ListeningModule } from './modules/listening/listening.module';
import { WritingModule } from './modules/writing/writing.module';
import { SpeakingModule } from './modules/speaking/speaking.module';
import { SharedModule } from './shared/shared.module'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'select-level',
    loadChildren: () =>
      import('./modules/level-select/level-select.module').then((m) => m.LevelSelectModule),
  },
  {
    path: 'grammar',
    loadChildren: () =>
      import('./modules/grammar/grammar.module').then((m) => m.GrammarModule),
  },
  {
    path: 'writing',
    loadChildren: () =>
      import('./modules/writing/writing.module').then((m) => m.WritingModule),
  },
  {
    path: 'listening',
    loadChildren: () =>
      import('./modules/listening/listening.module').then((m) => m.ListeningModule),
  },
  {
    path: 'speaking',
    loadChildren: () =>
      import('./modules/speaking/speaking.module').then((m) => m.SpeakingModule),
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];
@NgModule({
  imports: [LoginModule, LevelSelectModule, GrammarModule, ListeningModule, WritingModule, SpeakingModule, SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
