import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:[
      {
        path: '', redirectTo: 'accueil', pathMatch: 'full'
      },
      {
        path: 'accueil',
        loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'pointage',
        loadChildren: () => import('./pointage/pointage.module').then( m => m.PointagePageModule)
      },
      {
        path: 'rapport',
        loadChildren: () => import('./rapport/rapport.module').then( m => m.RapportPageModule)
      },
      {
        path: 'programmes',
        loadChildren: () => import('./programmes/programmes.module').then( m => m.ProgrammesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'signale',
        loadChildren: () => import('./signale/signale.module').then( m => m.SignalePageModule)
      },
      {
        path: 'besoins',
        loadChildren: () => import('./besoins/besoins.module').then( m => m.BesoinsPageModule)
      },
      {
        path: 'incidents',
        loadChildren: () => import('./incidents/incidents.module').then( m => m.IncidentsPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
