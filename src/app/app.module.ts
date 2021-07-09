import { SelectorsComponent } from './modules/level-select/components/selectors/selectors.component';
import { SelectLevelComponent } from './modules/level-select/level-select.component';
import { LeftLayoutComponent } from './shared/components/left-layout/left-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
