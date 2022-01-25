import { NgModule } from '@angular/core';
import { SupplierComponent } from './supplier.component';
import { CommonModule } from '@angular/common';
import { SupplierRoutes } from '../Routing/routing.supplierrouting';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
