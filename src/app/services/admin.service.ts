import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setupTestingRouterInternal } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpClient:HttpClient) { }

  signIn(admin:any){
    
  }
}
