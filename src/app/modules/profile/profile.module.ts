import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
