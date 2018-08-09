import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <ng-container 
        [ngTemplateOutlet]="tmpl"
        [ngOutletContext]="context">
      </ng-container>
      <template #tmpl let-name let-location="location">
        {{name}} : {{location}}
      </template>
    </div>
  `
})
export class AppComponent {
  context = {
    $implicit: 'Ultimate Angular',
    location: 'England, UK'
  };
 }
