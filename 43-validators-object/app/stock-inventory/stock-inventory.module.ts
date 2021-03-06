import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StockInventoryComponent } from './containers/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductComponent } from './components/stock-product/stock-product.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';

import { StockInventoryService } from './services/stock-inventory.service';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductComponent,
    StockSelectorComponent,
    StockCounterComponent
  ],
  providers: [
    StockInventoryService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule { }
