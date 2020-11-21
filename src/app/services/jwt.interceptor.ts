import { AccountService } from './account.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url!=environment.url_auth_service+'/auth/login'){
    request=request.clone({
     setHeaders:{
       Authorization: `${this.accountService.loadToken()}`,
       Accept:`application/json`

     } 
    })
    }
    return next.handle(request);
  }
}
