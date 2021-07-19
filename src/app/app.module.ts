import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LevelSelectModule } from './modules/level-select/level-select.module';
import { QuestionsLoadingService } from './modules/questions-block/questions-loading.service';
import { HttpClientModule } from '@angular/common/http';
import { ReduxModule } from './redux/redux.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    LevelSelectModule, 
    HttpClientModule, 
    ReduxModule
  ],
  providers: [QuestionsLoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
