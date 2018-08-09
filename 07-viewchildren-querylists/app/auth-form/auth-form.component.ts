import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  ViewChildren,
  QueryList,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef
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
        <auth-message 
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
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
  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;

  showMessage: boolean;

  constructor(private cd: ChangeDetectorRef) {
    this.submitted = new EventEmitter();
  }

  ngAfterContentInit() {
    if (this.remembers) {
      this.remembers.forEach(remember => {
        remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  ngAfterViewInit() {
    if (this.messages) {
      this.messages.forEach(message => message.days = 30);
      this.cd.detectChanges();
    }
  }

  onSubmit(user: User) {
    this.submitted.emit(user);
  }
}
