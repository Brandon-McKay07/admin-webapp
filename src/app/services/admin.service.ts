import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setupTestingRouterInternal } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private obj = new BehaviorSubject<boolean>(false);
  private loggedIn = this.obj.asObservable();
  constructor(public httpClient:HttpClient) { }

  signIn(admin:any):Observable<string>{
    return this.httpClient.post("http://localhost:9090/admins/signIn",admin,{responseType:'text'});
  }

  get isLogged(){
    return this.loggedIn; // we get false initially because it's not logged in 
  }

  logIn(){
    this.obj.next(true);
  }

  logOut(){
    this.obj.next(false);
  }

}
