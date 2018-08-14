import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <label>Credit Card Number</label>
      <input 
        name="credit-card" 
        type="text"
        placeholder="Enter your 16-digit card number"
        credit-card>
      <br>  
      <label #myTooltip="tooltip"
        tooltip="3 digits, back of your card">
        Enter your security code
        <span (mouseover)="myTooltip.show()"
          (mouseout)="myTooltip.hide()">
          (?)
        </span>
        </label>
      <input type="text">
    </div>
  `
})
export class AppComponent {
}
