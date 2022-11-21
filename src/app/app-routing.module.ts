import { OrderTrackComponent } from './components/orders/order-track/order-track.component';
import { OrderViewComponent } from './components/orders/order-view/order-view.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductCategoriesComponent } from './components/products/product-categories/product-categories.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AuthComponent } from './components/auth/auth.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';

import { ProductsComponent } from './components/products/products.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home' ,component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'auth', component:AuthComponent},
  {path:'products', children:[
    {path:'',component:ProductsComponent},
    {path:'veiw', component:ProductViewComponent},
    {path:'list', component:ProductListComponent},
    {path:'create', component:ProductCreateComponent},
    {path:'categories',component:ProductCategoriesComponent},
    {path:'detail', component:ProductDetailsComponent}

  ]},
  {path:'orders', children:[
{path:'',component:OrdersComponent},

{path:'create', component:OrderCreateComponent},
{path:'view', component:OrderViewComponent},
{path:'track', component:OrderTrackComponent}
  ]},
  {path:'contactus', component:ContactusComponent},
  {path:'users', children:[
    {path:'', component:UsersComponent},
    {path:'create', component:UserCreateComponent},
    {path:'view', component:UserViewComponent},
    {path:'detail', component:UserDetailComponent}

  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
