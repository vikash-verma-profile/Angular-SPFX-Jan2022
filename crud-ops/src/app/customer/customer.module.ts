import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/routing.customerrouting';
import { GridComponent } from '../Utility/Utility.GridComponent';
import { GridModule } from '../Utility/Utility.GridModule';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes),
    GridModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
