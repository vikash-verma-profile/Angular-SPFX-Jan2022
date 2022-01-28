import { Component } from "@angular/core";
import { User } from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "pipe-demo";

  users: User[] = [
    { name: "Vikash", age: 40 },
    { name: "Sahil", age: 30 },
    { name: "Kumar", age: 30 },
  ];

  searchItem = "";

  changeProperty() {
    console.log('Hi');
    this.users[0].name = "Verma";
  }

  changeReference() {
    const refUsers = this.users.slice();
    refUsers[0].name="Verma";
    this.users=refUsers
    console.log(this.users);
  }
}
