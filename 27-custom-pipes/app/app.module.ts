import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    FileSizePipe
  ]
})
export class AppModule { }
