import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    formCustomerGroup:FormGroup;

    constructor(){

        //This part was how we can add single validation
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});
        //control-->validated
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));


        //This part was how we can add multiple validation
        //required
        //validate for 4 latter numeric
        var validationcollection=[];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

        this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.compose(validationcollection)));

        
    }
}

//CCC
//Create--we create the validation object model
//Connect
//Check