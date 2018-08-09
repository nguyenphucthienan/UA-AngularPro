import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <ng-container [ngTemplateOutlet]="tmpl"></ng-container>
      <template #tmpl>
        Ultimate Angular
      </template>
    </div>
  `
})
export class AppComponent { }
