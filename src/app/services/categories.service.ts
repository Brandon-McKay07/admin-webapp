import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private HttpClient: HttpClient) { }

  getCategories(){
    return this.HttpClient.get<any[]>('../../assets/json/categories.json')
  }
  storeCategoriesDetails(category:any):Observable<string>{
    return this.HttpClient.post("// http://localhost:9090/categories/storeCategories",category,{responseType:'text'});

  }
}