import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DemoxWebPartComponent } from './demox-web-part/demox-web-part.component';

@NgModule({
  declarations: [
    DemoxWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [DemoxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(DemoxWebPartComponent, { injector: this.injector });
    customElements.define('app-demox-web-part', el);
  }
}
