import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HjWebPartComponent } from './hj-web-part/hj-web-part.component';

@NgModule({
  declarations: [
    HjWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HjWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(HjWebPartComponent, { injector: this.injector });
    customElements.define('app-hj-web-part', el);
  }
}
