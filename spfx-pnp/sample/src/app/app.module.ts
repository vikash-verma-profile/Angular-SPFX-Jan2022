import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SampleWebPartComponent } from './sample-web-part/sample-web-part.component';

@NgModule({
  declarations: [
    SampleWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SampleWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SampleWebPartComponent, { injector: this.injector });
    customElements.define('app-sample-web-part', el);
  }
}
