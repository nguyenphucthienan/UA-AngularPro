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
        <stock-selector [parent]="form" [products]="products"></stock-selector>
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
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  });

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
