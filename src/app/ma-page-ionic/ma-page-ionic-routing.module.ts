import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaPageIonicPage } from './ma-page-ionic.page';

const routes: Routes = [
  {
    path: '',
    component: MaPageIonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaPageIonicPageRoutingModule {}
