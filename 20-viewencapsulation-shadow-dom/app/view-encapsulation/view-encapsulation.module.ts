import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';

@NgModule({
  declarations: [
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ]
})
export class ViewEncapsulationModule { };
