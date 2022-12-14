import { OrdersService } from 'src/app/services/orders.service';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderObservable: Observable<any[]> = new Observable();

  constructor(private OrdersService: OrdersService) { }

  orderStatusIdx: number = 0;
  orderStatus: { name: string; value: number }[] = [
    { name: 'Placed', value: 0 },
    { name: 'Accepted', value: 1 },
    { name: 'Delivered', value: 2 },
    { name: 'Cancelled', value: 3 },
  ];

  viewOrderBool: boolean = false;
  viewOrderIdx: number | undefined;
  orderModel: any;

  ngOnInit(): void {
    this.orderObservable = this.OrdersService.getOrders();
  }

  changeOrderStatus(orderStatusIdx: number) {
    this.orderStatusIdx = orderStatusIdx;
  }

  openViewModal(orderModel: any, viewOrderIdx: number) {
    console.log(orderModel);    
    this.viewOrderBool = true;
    this.viewOrderIdx = viewOrderIdx;
    this.orderModel = orderModel;
  }

  closeViewModal() {
    delete this.viewOrderIdx;
    delete this.orderModel;
    this.viewOrderBool = false;
  }
}
