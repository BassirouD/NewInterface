import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntreePageRoutingModule } from './entree-routing.module';

import { EntreePage } from './entree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntreePageRoutingModule
  ],
  declarations: [EntreePage]
})
export class EntreePageModule {}
