import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerApplication';
  imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  /**
   *
   */

  data:number=100;
  constructor() {
   console.log("constructor" +this.data);
  }
  //Life cycle hooks
  ngOnChanges(){
    console.log("ngOnChanges"+this.data);
  }

  ngOnInit(){
    console.log("ngOnInit"+this.data);
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }
  displayval="";
  show(input){
   console.log(input);
  }

  printdata(input){
    console.log(input);
  }
  getValue(val){
    this.displayval=val;
  }
  AddData(){
this.data+=100;
  }
  ClearData(){
    this.data-=10;
  }
}
