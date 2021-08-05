import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTransfertPage } from './test-transfert.page';

const routes: Routes = [
  {
    path: '',
    component: TestTransfertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTransfertPageRoutingModule {}
