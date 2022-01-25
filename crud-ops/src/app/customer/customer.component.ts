import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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

  hasErrorinView(typeofvalidator:string,controlname:string):boolean{
 return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }
}
