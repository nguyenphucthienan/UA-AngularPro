import {
  Component,
  AfterContentInit,
  ViewChild,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-location="location">
        {{name}} : {{location}}
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Ultimate Angular',
      location: 'England, UK'
    });
  }
}
