import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeName()">Change name property</button>
      <button (click)="changeUser()">Change user object</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `
})
export class AppComponent { 
  user: any = {
    name: 'Angular Fundamentals',
    location: 'England, UK'
  }
  
  addProp() {
    this.user.email = 'angular@angular.io';
  }

  changeName() {
    this.user.name = 'Angular Pro'
  }

  changeUser() {
    this.user = {
      name: 'Ultimate Angular',
      location: 'London, UK'
    }
  }
}
