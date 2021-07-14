import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakingComponent } from './speaking.component';

const routes: Routes = [
  {path: 'speaking', component: SpeakingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakingRoutingModule { }
