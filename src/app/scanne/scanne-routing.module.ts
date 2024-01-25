import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannePage } from './scanne.page';

const routes: Routes = [
  {
    path: '',
    component: ScannePage,
    children:[
      {
        path: '', redirectTo: 'scann-form', pathMatch: 'full'
      },
      {
        path: 'scann-form',
        loadChildren: () => import('./scann-form/scann-form.module').then( m => m.ScannFormPageModule)
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannePageRoutingModule {}
