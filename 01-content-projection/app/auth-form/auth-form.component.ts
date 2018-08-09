import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <ng-content></ng-content>
      <label>
        Email address
        <input type="email" name="email" ngModel>
      </label>
      <label>
        Password
        <input type="password" name="password" ngModel>
      </label>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<User>;

  constructor() {
    this.submitted = new EventEmitter();
  }

  onSubmit(user: User) {
    this.submitted.emit(user);
  }
}
