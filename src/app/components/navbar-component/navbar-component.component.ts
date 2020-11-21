import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor(private accountService:AccountService,private router :Router ){
    
   }

  ngOnInit(): void {
  }

  onLogOut(){
    this.accountService.logOut();

  }
  isAuth(){
   return this.accountService.isAuth();

  }

}
