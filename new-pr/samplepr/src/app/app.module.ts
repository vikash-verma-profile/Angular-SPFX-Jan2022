import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SampleprWebPartComponent } from './samplepr-web-part/samplepr-web-part.component';

@NgModule({
  declarations: [
    SampleprWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SampleprWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SampleprWebPartComponent, { injector: this.injector });
    customElements.define('app-samplepr-web-part', el);
  }
}
