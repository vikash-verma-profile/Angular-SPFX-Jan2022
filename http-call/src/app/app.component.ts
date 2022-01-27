import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Posts } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-call';
  PostModels:Array<Posts>=new Array<Posts>();

  //constructor
  constructor(public http:HttpClient){
    this.http.get("https://my-json-server.typicode.com/typicode/demo/posts").subscribe(res=>
      this.Success(res),res=> Error(res)
    );
  }
  //sucees method
  Success(res){
    this.PostModels=res;
  }
  Error(res){
    console.log(res);
  }
}
