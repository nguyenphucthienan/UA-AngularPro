import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyForDirective } from './my-for/my-for.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    MyForDirective
  ]
})
export class AppModule { }
