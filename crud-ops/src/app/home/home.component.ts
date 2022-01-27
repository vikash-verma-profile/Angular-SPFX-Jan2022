import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/Utility.Logger';

@Component({
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

LogObj:BaseLogger=null;
  //constructor Injection 
  constructor(_logger:BaseLogger){ //Injection happening here
    this.LogObj=_logger;
    this.LogObj.Log();
  }
  title = 'crud-ops'; 
}
