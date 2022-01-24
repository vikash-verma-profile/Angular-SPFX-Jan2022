import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerApplication';
  imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

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
}
