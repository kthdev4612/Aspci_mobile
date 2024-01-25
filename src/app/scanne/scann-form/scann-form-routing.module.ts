import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannFormPage } from './scann-form.page';

const routes: Routes = [
  {
    path: '',
    component: ScannFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannFormPageRoutingModule {}
