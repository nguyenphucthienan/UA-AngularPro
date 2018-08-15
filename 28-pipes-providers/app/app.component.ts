import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './file-size.pipe';

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <div *ngFor="let file of mappedFiles">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  providers: [
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  files: File[];
  mappedFiles: File[];

  constructor(private fileSizePipe: FileSizePipe) {
  }

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 123456789, type: 'image/svg' },
      { name: 'angular.jpg', size: 88888, type: 'image/jpg' },
      { name: 'background.png', size: 68686868, type: 'image/png' }
    ];

    this.mappedFiles = this.files.map((file: File) => ({
      name: file.name,
      size: this.fileSizePipe.transform(file.size, 'megabytes'),
      type: file.type
    }));
  }
}
