import { Router } from '@angular/router';
import { Role } from './../commons/models/role';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './../commons/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService  extends DataService{
  private jwtToken:string;
  private roles :Array<Role>=[];

  constructor( http: HttpClient,private router:Router) { 
  super("auth",http);
  }


  getUsers(){
    if(this.jwtToken==null) this.loadToken();
    return this.getAll('users',new HttpHeaders({'Authorization':this.jwtToken}))
  }

 saveToken(jwtToken){
  this.jwtToken=jwtToken;
  localStorage.setItem("token",jwtToken);

 }



loadToken(){
this.jwtToken=localStorage.getItem('token');
return this.jwtToken;
}

logOut(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('/auth');
}

isAdmin(){
  for(let role of this.roles){
  if(role.roleName=='ADMIN')  return true;
    }
  return false;
}

isAuth(){
  if(this.loadToken())
  return true;
  else 
  return false;
}



}
