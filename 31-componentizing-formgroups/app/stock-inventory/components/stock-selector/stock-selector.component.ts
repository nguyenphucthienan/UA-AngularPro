import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div [formGroup]="parent" class="stock-selector">
    </div>
  `
})
export class StockSelectorComponent {
  @Input() parent: FormGroup;
}
