import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceSelectionPage } from './invoice-selection.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceSelectionPageRoutingModule {}
