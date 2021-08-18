import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '/tabs/accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: '/tabs/dossiers',
        loadChildren: () => import('../dossiers/dossiers.module').then( m => m.DossiersPageModule)
      },
      {
        path: '/tabs/favoris',
        loadChildren: () => import('../favoris/favoris.module').then( m => m.FavorisPageModule)
      },
      {
        path: '/tabs/parametres',
        loadChildren: () => import('../parametres/parametres.module').then( m => m.ParametresPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
