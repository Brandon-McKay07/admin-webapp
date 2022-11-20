import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  public prodObservable: Observable<any[]> = new Observable();
  public categoryObservable: Observable<any[]> = new Observable();


constructor(private categoriesService:CategoriesService){}


ngOnInit(): void{
  
  this.categoryObservable = this.categoriesService.getCategories();

}
}
