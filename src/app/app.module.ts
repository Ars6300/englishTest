import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectLevelComponent } from './modules/level-select/level-select.component';
import { LevelSelectModule } from './modules/level-select/level-select.module';
import { LeftLayoutComponent } from './shared/components/left-layout/left-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectLevelComponent,
    LeftLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LevelSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

