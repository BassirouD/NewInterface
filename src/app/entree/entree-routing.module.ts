import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntreePage } from './entree.page';

const routes: Routes = [
  {
    path: '',
    component: EntreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntreePageRoutingModule {}
