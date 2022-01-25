import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    formCustomerGroup:FormGroup;

    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});
        //control-->validated
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
        
    }
}

//CCC
//Create--we create the validation object model
//Connect
//Check