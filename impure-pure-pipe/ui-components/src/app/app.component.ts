import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-components';
  SayHello=true;

  items: any = [
    { name: "Vikash", age: 40 },
    { name: "Sahil", age: 30 },
    { name: "Kumar", age: 30 },
  ];
}
