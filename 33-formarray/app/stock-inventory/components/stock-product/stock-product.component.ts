import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-product',
  styleUrls: ['stock-product.component.scss'],
  template: `
    <div [formGroup]="parent" class="stock-product">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div [formGroupName]="i" class="stock-product__content">
            <div class="stock-product__name">
              {{ item.value.product_id }}
            </div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity">
            <button type="button">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockProductComponent {
  @Input() parent: FormGroup;

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
