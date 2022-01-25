import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:"grid-ui",
  templateUrl: './Utility.Grid.html'
})
export class GridComponent {

  //for columns name
  gridColumns:Array<Object>=new Array<Object>();

  //for grid data
  gridData:Array<Object>=new Array<Object>();

  //component which is using this is responsible for providing this value
  @Input("grid-columns")
  set setGridColumns(_gridColumns:Array<Object>){
    this.gridColumns=_gridColumns;
  }
  @Input("grid-data")
  set setGridData(_gridData:Array<Object>){
    this.gridData=_gridData;
  }


}
