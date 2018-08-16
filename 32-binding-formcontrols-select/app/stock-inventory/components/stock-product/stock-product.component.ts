import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-product',
  styleUrls: ['stock-product.component.scss'],
  template: `
    <div [formGroup]="parent" class="stock-product">
    </div>
  `
})
export class StockProductComponent {
  @Input() parent: FormGroup;
}
