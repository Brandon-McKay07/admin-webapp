import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient: HttpClient) { }

  getProducts(){
    return this.HttpClient.get<any[]>('../../assets/json/products.json')
  }

  storeProduct(product:any):Observable<string>{
    return this.HttpClient.post("http://localhost:9090/products/storeProduct",product,{responseType:'text'});
  }
}