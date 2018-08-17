import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input
          type="text"
          placeholder="Branch ID"
          formControlName="branch">
        <div *ngIf="required('branch')" class="error">
          Branch ID is required
        </div>
        <div *ngIf="invalidBranch" class="error">
          Invalid branch code: 1 letter, 3 numbers
        </div>
        <input
          type="text"
          placeholder="Manager Code"
          formControlName="code">
        <div *ngIf="required('code')" class="error">
          Manager code is required
        </div>
      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input() parent: FormGroup;

  get invalidBranch() {
    return this.parent.get('store.branch').dirty
      && this.parent.get('store.branch').hasError('invalidBranch')
      && !this.required('branch');
  }

  required(name: string) {
    return this.parent.get(`store.${name}`).touched
      && this.parent.get(`store.${name}`).hasError('required');
  }
}
