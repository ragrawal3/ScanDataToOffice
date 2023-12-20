import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceSelectionPageRoutingModule } from './invoice-selection-routing.module';

import { InvoiceSelectionPage } from './invoice-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceSelectionPageRoutingModule
  ],
  declarations: [InvoiceSelectionPage]
})
export class InvoiceSelectionPageModule {}
