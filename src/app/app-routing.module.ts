import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'entree',
        loadChildren: () => import('./entree/entree.module').then(m => m.EntreePageModule)
    },
    {
        path: 'menu/:id',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
    },
    {
        path: 'paiement',
        loadChildren: () => import('./paiement/paiement.module').then(m => m.PaiementPageModule)
    },
    {
        path: 'creation-compte',
        loadChildren: () => import('./creation-compte/creation-compte.module').then(m => m.CreationComptePageModule)
    },
    {
        path: 'ma-page-ionic',
        loadChildren: () => import('./ma-page-ionic/ma-page-ionic.module').then(m => m.MaPageIonicPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'info-dossier',
        loadChildren: () => import('./info-dossier/info-dossier.module').then(m => m.InfoDossierPageModule)
    },
    {
        path: 'info-plus-dossier',
        loadChildren: () => import('./info-plus-dossier/info-plus-dossier.module').then(m => m.InfoPlusDossierPageModule)
    },
    {
        path: 'support',
        loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
    },
    {
        path: '',
        loadChildren: () => import('./bienvenue/bienvenue.module').then(m => m.BienvenuePageModule)
    },
  {
    path: 'pay-service',
    loadChildren: () => import('./paiemenentFacturePages/pay-service/pay-service.module').then( m => m.PayServicePageModule)
  },
  {
    path: 'choose-pay',
    loadChildren: () => import('./paiemenentFacturePages/choose-pay/choose-pay.module').then( m => m.ChoosePayPageModule)
  },
  {
    path: 'paiement-mobile',
    loadChildren: () => import('./paiemenentFacturePages/mode-paiement/paiement-mobile/paiement-mobile.module').then( m => m.PaiementMobilePageModule)
  },
  {
    path: 'orbus-paiement',
    loadChildren: () => import('./paiemenentFacturePages/mode-paiement/orbus-paiement/orbus-paiement.module').then( m => m.OrbusPaiementPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
