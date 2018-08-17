import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div [formGroup]="parent" class="stock-selector">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>
        <stock-counter
          [step]="10"
          [min]="10"
          [max]="1000"
          formControlName="quantity">
        </stock-counter>
        <button 
          type="button"
          [disabled]="stockExists || notSelected"
          (click)="onAdd()">Add stock</button>
        <div *ngIf="stockExists" class="stock-selector__error">
          Item already exists in the stock
        </div>
      </div>
    </div>
  `
})
export class StockSelectorComponent {
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added = new EventEmitter<any>();

  get stockExists() {
    return this.parent.get('selector.product_id').dirty
      && this.parent.hasError('stockExists');
  }

  get notSelected() {
    return !this.parent.get('selector.product_id').value;
  }

  onAdd() {
    this.added.emit(this.parent.get('selector').value);
    this.parent.get('selector').reset({
      product_id: '',
      quantity: 10
    });
  }
}
