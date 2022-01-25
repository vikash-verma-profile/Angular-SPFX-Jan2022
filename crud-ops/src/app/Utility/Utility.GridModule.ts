import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../Utility/Utility.GridComponent';

@NgModule({
  declarations: [
    GridComponent
  ],
  exports:[GridComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [GridComponent]
})
export class GridModule { }
