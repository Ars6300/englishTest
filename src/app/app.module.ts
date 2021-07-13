import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LevelSelectModule } from './modules/level-select/level-select.module';
import { SelectLevelComponent } from './modules/level-select/level-select.component';

@NgModule({
  declarations: [AppComponent, SelectLevelComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LevelSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
