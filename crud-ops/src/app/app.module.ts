import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './home/master.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomerComponent,
    SupplierComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
