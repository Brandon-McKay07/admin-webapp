
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
 public prodObservable: Observable<any[]> = new Observable();
 public categoryObservable: Observable<any[]> = new Observable();
 
 
  constructor(private productService: ProductsService, private categoriesService:CategoriesService){}


  ngOnInit(): void {

    this.prodObservable = this.productService.getProducts();
    this.categoryObservable = this.categoriesService.getCategories();
   
    
 
  }


} 

