import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    <label>
  `
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean>;

  constructor() {
    this.checked = new EventEmitter();
  }

  onChecked(checked: boolean) {
    this.checked.emit(checked);
  }
}
