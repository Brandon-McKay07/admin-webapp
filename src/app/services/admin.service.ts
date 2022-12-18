import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setupTestingRouterInternal } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpClient:HttpClient) { }

  signIn(admin:any):Observable<string>{
    return this.httpClient.post("http://localhost:9090/admins/signIn",admin,{responseType:'text'});
  }
}
