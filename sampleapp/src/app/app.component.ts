import { Component } from '@angular/core';

@Component({
  selector: 'vikash',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Interpolation
  title = 'sampleapp';
  data='Hello i am sample Data';
  num=60;
  //function defination
  getval(){
    return "Helo i am sample function"
  }
}
