import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:User=new User();
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  registerUser(){
    console.log("Hi");
    console.log(this.registerUser);

    // this._auth.registerUser(this.registerUser).subscribe((res)=>{
    //   localStorage.setItem('token',res.token);
    //   this._router.navigate(['events']);
    // },
    // (err)=>console.log(err)
    // );
  }

}
