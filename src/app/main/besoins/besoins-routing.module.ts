import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BesoinsPage } from './besoins.page';

const routes: Routes = [
  {
    path: '',
    component: BesoinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinsPageRoutingModule {}
