import { StatisticsComponent } from './components/statistics/statistics.component';
import { ResultsComponent } from './components/results/results.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NOTIFICATION_PATH,
  RESULTS_PATH,
  STATISTICS_PATH,
  PROFILE_PATH,
  EDIT_PATH,
  USERS_PATH,
  ASSIGNMENTS_PATH,
} from './profile-routing.constants';
import { AuthGuard } from 'src/app/core/guard/auth-guard/auth.guard';
import { QuestionsEditComponent } from 'src/app/pages/questions-edit/questions-edit.component';
import { UsersHrComponent } from 'src/app/pages/users-hr/users-hr/users-hr.component';
import { UsersAdminComponent } from 'src/app/pages/users-admin/users-admin/users-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: `/${PROFILE_PATH}/${NOTIFICATION_PATH}`,
        pathMatch: 'full',
      },
      {
        path: NOTIFICATION_PATH,
        component: NotificationsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RESULTS_PATH,
        component: ResultsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: STATISTICS_PATH,
        component: StatisticsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: EDIT_PATH,
        component: QuestionsEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: USERS_PATH,
        component: UsersHrComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ASSIGNMENTS_PATH,
        component: UsersAdminComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
