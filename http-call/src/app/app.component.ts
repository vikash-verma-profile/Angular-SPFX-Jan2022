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
  PostModel:Posts=new Posts();

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
  SendData(){
    console.log("Hi");
    var json:any={};
    json.title="Test";
    this.http.post("https://my-json-server.typicode.com/typicode/demo/posts",json).subscribe(res=>
    this.SuccessPost(res),res=> Error(res)
  );
  }
  SuccessPost(res){
    this.PostModel=res;
  }
}
