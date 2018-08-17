import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-product',
  styleUrls: ['stock-product.component.scss'],
  template: `
    <div [formGroup]="parent" class="stock-product">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div [formGroupName]="i" class="stock-product__content">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id)?.name }}
            </div>
            <div class="stock-product__price">
              {{ getProduct(item.value.product_id)?.price | currency:'USD':true }}
            </div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity">
            <button type="button" (click)="onRemove(item, i)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockProductComponent {
  @Input() parent: FormGroup;
  @Input() map: Map<number, Product>;
  @Output() removed = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(id: number): Product {
    return this.map.get(id);
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
