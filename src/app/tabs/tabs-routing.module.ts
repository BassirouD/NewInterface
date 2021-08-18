import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'dossiers',
        loadChildren: () => import('../dossiers/dossiers.module').then( m => m.DossiersPageModule)
      },
      {
        path: 'favoris',
        loadChildren: () => import('../favoris/favoris.module').then( m => m.FavorisPageModule)
      },
      {
        path: 'parametres',
        loadChildren: () => import('../parametres/parametres.module').then( m => m.ParametresPageModule)
      },
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
