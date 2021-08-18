import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaPageIonicPageRoutingModule } from './ma-page-ionic-routing.module';

import { MaPageIonicPage } from './ma-page-ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaPageIonicPageRoutingModule
  ],
  declarations: [MaPageIonicPage]
})
export class MaPageIonicPageModule {}
