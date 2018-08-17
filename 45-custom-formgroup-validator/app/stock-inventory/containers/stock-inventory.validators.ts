import { AbstractControl } from '@angular/forms';

export class StockInventoryValidators {
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidBranch: true };
  }

  static checkStockExists(control: AbstractControl) {
    const selector = control.get('selector');
    const stockItems = control.get('stock');

    if (!(selector && stockItems)) {
      return null;
    }

    const exists = stockItems.value.some((item) => {
      return item.product_id === parseInt(selector.value.product_id, 10);
    });

    return exists ? { stockExists: true } : null;
  }
}
