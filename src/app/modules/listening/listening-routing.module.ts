import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeningComponent } from './listening.component';

const routes: Routes = [
  {path: 'listening', component: ListeningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeningRoutingModule { }
