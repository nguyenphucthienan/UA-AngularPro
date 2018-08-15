import { Component } from '@angular/core';

interface File {
  name: string,
  size: number,
  type: string
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div>
    <div *ngFor="let file of files">
      <p>{{ file.name }}</p>
      <p>{{ file.size | filesize:'megabytes' }}</p>
    </div>
  </div>
  `
})
export class AppComponent {
  files: File[];

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 123456789, type: 'image/svg' },
      { name: 'angular.jpg', size: 88888, type: 'image/jpg' },
      { name: 'background.png', size: 68686868, type: 'image/png' }
    ];
  }
}
