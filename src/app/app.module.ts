import { UsersModule } from './components/users/users.module';
import { ProductsModule } from './components/products/products.module';
import { OrdersModule } from './components/orders/orders.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AuthComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SideNavbarComponent,
    MainComponent,

    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
