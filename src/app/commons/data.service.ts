import { User } from './models/user';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class DataService {
    host:string

    constructor(@Inject(String)public url:string,private http:HttpClient){
        this.host=environment.url_auth_service;
    }

    getAll(methode?:string,header?:HttpHeaders){
        return this.http.get(this.host+"/"+this.url+"/"+methode,{headers:header}).pipe(
            map(resource=>resource)
        )
    }
    get(id?:string,methode?:string,header?:HttpHeaders){
        return this.http.get(this.host+"/"+this.url+"/"+methode+"/"+id,{headers:header}).pipe(
            map(resource=>resource)
        )
    }
    authentification(user:User){
        return this.http.post(this.host+"/login",user,{observe:'response'}).pipe(
            map(resource=>resource)
        )
    }
    create(entity,methode?:string,header?:HttpHeaders){
        return this.http.post(this.host+"/"+this.url+"/"+methode,entity,{headers:header}).pipe(
            map(resource=>resource)
        ) 
    }
    udpate(id:string,entity,methode?:string,header?:HttpHeaders){
        return this.http.put(this.host+"/"+this.url+"/"+methode,entity,{headers:header}).pipe(
            map(resource=>resource)
        ) 
    }
    delete(id:string,methode?:string,header?:HttpHeaders){
        return this.http.delete(this.host+"/"+this.url+"/"+methode+"/"+id,{headers:header}).pipe(
            map(resource=>resource)
        ) 
    }
}