import {
  Component,
  AfterContentInit,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <button (click)="destroyComponent()">Destroy</button>
      <button (click)="moveComponent()">Move</button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  component: ComponentRef<AuthFormComponent>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
