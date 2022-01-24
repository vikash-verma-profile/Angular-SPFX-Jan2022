import { Component } from '@angular/core';
import { Customer } from './app.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-ops';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  AddCustomer(){
    //console.log(this.CustomerModel);

    if(this.CustomerModels.find(x=>x.CustomerCode==this.CustomerModel.CustomerCode)){
      console.log("Edit");
    }
    else{
      this.CustomerModels.push(this.CustomerModel);
    }
    
    this.CustomerModel=new Customer(); //Clear the UI data
    console.log(this.CustomerModels);

  }
  EditCusomer(input){
    this.CustomerModel=input;
  }
}
