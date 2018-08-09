import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  ViewChild,
  QueryList,
  AfterContentInit,
  AfterViewInit
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <ng-content select="h3"></ng-content>
      <label>
        Email address
        <input type="email" name="email" ngModel>
      </label>
      <label>
        Password
        <input type="password" name="password" ngModel>
      </label>
      <ng-content select="auth-remember"></ng-content>
        <auth-message 
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
      <ng-content select="button"></ng-content>
    </form>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  @Output() submitted: EventEmitter<User>;
  @ContentChildren(AuthRememberComponent) remembers: QueryList<AuthRememberComponent>;
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  showMessage: boolean;

  constructor() {
    this.submitted = new EventEmitter();
  }

  ngAfterContentInit() {
    if (this.remembers) {
      this.remembers.forEach(remember => {
        remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
    if (this.message) {
      this.message.days = 30;
    }
  }

  ngAfterViewInit() {
    // if (this.message) {
    //   this.message.days = 30;
    // }
  }

  onSubmit(user: User) {
    this.submitted.emit(user);
  }
}
