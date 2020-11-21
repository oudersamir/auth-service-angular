import { TokenService } from './../../services/token.service';
import { AccountService } from './../../services/account.service';
import { Validation } from './../../commons/validation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/commons/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {
roles:any=[];
  authForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4)
      ,Validation.noBlancContent]),
    password:new  FormControl('',[Validators.required,Validators.minLength(4)
  ,Validation.noBlancContent ])
  })
   
  constructor(private accountService:AccountService,
              private router:Router,
              private tokenService:TokenService) { }
  get username(){
    return this.authForm.get('username');
  }
  get password(){
    return this.authForm.get('password');
  }

  ngOnInit(): void {
  }
  isAuth(){
    return this.tokenService.loggedIn();

  }

  onLogin(){
    this.accountService.authentification(new User(this.username.value,this.password.value)).subscribe(res=>{
     let jwtToken=res.headers.get('Authorization');
    
    // this.accountService.saveToken(jwtToken);
    alert("authentification reussite");
    this.handleResponse(res.body);
    this.roles=JSON.parse(JSON.stringify(res.body)).roles;
   console.log(this.roles)
    }
    ,err=>{
      alert(err);

    })
}

private  handleResponse(res){
  this.tokenService.handle(res)
  this.accountService.changeStatus(true);
  this.router.navigateByUrl("/home");
}

}
