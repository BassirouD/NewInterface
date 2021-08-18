import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import {Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
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
        ]
    }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
