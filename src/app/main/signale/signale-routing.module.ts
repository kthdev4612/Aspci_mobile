import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignalePage } from './signale.page';

const routes: Routes = [
  {
    path: '',
    component: SignalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalePageRoutingModule {}
