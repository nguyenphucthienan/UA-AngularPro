import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [`.email { border-color: #9f72e6 }`],
  template: `
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <h3>{{title}}</h3>
      <label>
        Email address
        <input type="email" name="email" ngModel #email>
      </label>
      <label>
        Password
        <input type="password" name="password" ngModel>
      </label>
      <button type="submit">
        {{title}}
      </button>
    </form>
  `
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<User>;

  title: string = 'Login';

  constructor() {
    this.submitted = new EventEmitter();
  }

  onSubmit(user: User) {
    this.submitted.emit(user);
  }
}
