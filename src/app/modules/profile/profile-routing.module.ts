import { StatisticsComponent } from './components/statistics/statistics.component';
import { ResultsComponent } from './components/results/results.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: '/profile/notifications', pathMatch: 'full' },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'statistics', component: StatisticsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
