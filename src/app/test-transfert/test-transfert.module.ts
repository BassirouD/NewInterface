import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTransfertPageRoutingModule } from './test-transfert-routing.module';

import { TestTransfertPage } from './test-transfert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTransfertPageRoutingModule
  ],
  declarations: [TestTransfertPage]
})
export class TestTransfertPageModule {}
