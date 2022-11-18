import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductViewComponent,
    ProductCategoriesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
