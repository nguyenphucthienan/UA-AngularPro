import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <ul>
        <li *myFor="let item of items; let i = index;">
          {{ i }}: {{ item.name }}
        </li>
        <template myFor [myForOf]="items" let-item let-i="index">
          <li>
            {{ i }}: {{ item.name }}
          </li>
        </template>
      </ul>
    </div>
  `
})
export class AppComponent {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }, {
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  }, {
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];
    }, 2000);
  }
}
