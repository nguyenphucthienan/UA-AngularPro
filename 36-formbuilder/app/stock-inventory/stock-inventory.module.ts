import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory.component';
import { StockBrandComponent } from './components/stock-brand/stock-brand.component';
import { StockProductComponent } from './components/stock-product/stock-product.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBrandComponent,
    StockProductComponent,
    StockSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StockInventoryComponent,
    StockBrandComponent,
    StockProductComponent,
    StockSelectorComponent
  ]
})
export class StockInventoryModule { }
