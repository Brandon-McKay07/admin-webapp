import { OrderTrackComponent } from './order-track/order-track.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderCreateComponent,
    OrderViewComponent,
    OrderTrackComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class OrdersModule { }
