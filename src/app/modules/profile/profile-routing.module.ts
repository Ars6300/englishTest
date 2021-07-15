import { StatisticsComponent } from './components/statistics/statistics.component';
import { ResultsComponent } from './components/results/results.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NOTIFICATION_PATH, RESULTS_PATH, STATISTICS_PATH } from './profile-routing.constants';
import { PROFILE_PATH } from 'src/app/app-routing.constants';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: `/${PROFILE_PATH}/${NOTIFICATION_PATH}`, pathMatch: 'full' },
      { path: NOTIFICATION_PATH, component: NotificationsComponent },
      { path: RESULTS_PATH, component: ResultsComponent },
      { path: STATISTICS_PATH, component: StatisticsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}