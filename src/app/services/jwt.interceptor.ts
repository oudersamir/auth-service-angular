import { TokenService } from './token.service';
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

  constructor(private accountService:AccountService,
              private tokenSerice:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url!=environment.url_auth_service+'/login'){
    request=request.clone({
     setHeaders:{
       Authorization: `Bearer ${this.tokenSerice.getToken()}`,
       Accept:`application/json`

     } 
    })
    }
    return next.handle(request);
  }
}
