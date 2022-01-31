import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DemoWebWebPartComponent } from './demo-web-web-part/demo-web-web-part.component';

@NgModule({
  declarations: [
    DemoWebWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [DemoWebWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(DemoWebWebPartComponent, { injector: this.injector });
    customElements.define('app-demo-web-web-part', el);
  }
}
