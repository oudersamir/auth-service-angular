import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { Role } from './../commons/models/role';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './../commons/data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService  extends DataService{
  private jwtToken:string;
  private roles :Array<Role>=[];

  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  authStatus=this.loggedIn.asObservable();

  constructor( http: HttpClient,private router:Router,private tokenService:TokenService) { 
  super("auth",http);
  }
  
  changeStatus(value:boolean){
    this.loggedIn.next(value);
  }

  getUsers(){
    if(this.tokenService.loggedIn()) 
    return this.getAll('users',new HttpHeaders({'Authorization':this.jwtToken}))
  }

 

logOut(){
  this.tokenService.remove();
  this.changeStatus(false);
  this.router.navigateByUrl('/login');
}

isLogIn(){
  return this.tokenService.loggedIn();
}

isAdmin(){
  for(let role of this.roles){
  if(role.roleName=='ADMIN')  return true;
    }
  return false;
}





}
