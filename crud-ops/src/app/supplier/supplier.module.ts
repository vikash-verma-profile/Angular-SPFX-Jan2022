import { NgModule } from '@angular/core';
import { SupplierComponent } from './supplier.component';
import { CommonModule } from '@angular/common';
import { SupplierRoutes } from '../Routing/routing.supplierrouting';
import { RouterModule } from '@angular/router';
import { GridComponent } from '../Utility/Utility.GridComponent';
import { GridModule } from '../Utility/Utility.GridModule';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SupplierRoutes),
    GridModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
