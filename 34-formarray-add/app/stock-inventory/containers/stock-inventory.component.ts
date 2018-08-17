import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"></stock-branch>
        <stock-selector 
          [parent]="form"
          [products]="products"
          (added)="addStock($event)">
        </stock-selector>
        <stock-product [parent]="form"></stock-product>
        <div class="stock-inventory__buttons">
          <button 
          type="submit"
          [disabled]="form.invalid">
            Order stock
          </button>
        </div>
        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 800, name: 'Apple Watch' },
    { id: 2, price: 1800, name: 'iPhone X' },
    { id: 3, price: 600, name: 'iPad Pro' },
    { id: 4, price: 2000, name: 'MacBook Pro' }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 20 }),
      this.createStock({ product_id: 2, quantity: 50 })
    ])
  });

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
