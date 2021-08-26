import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./entree/entree.module').then( m => m.EntreePageModule)
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'creation-compte',
    loadChildren: () => import('./creation-compte/creation-compte.module').then( m => m.CreationComptePageModule)
  },
  {
    path: 'ma-page-ionic',
    loadChildren: () => import('./ma-page-ionic/ma-page-ionic.module').then( m => m.MaPageIonicPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'info-dossier',
    loadChildren: () => import('./info-dossier/info-dossier.module').then( m => m.InfoDossierPageModule)
  },
  {
    path: 'info-plus-dossier',
    loadChildren: () => import('./info-plus-dossier/info-plus-dossier.module').then( m => m.InfoPlusDossierPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
