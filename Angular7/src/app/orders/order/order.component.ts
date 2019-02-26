import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  constructor(private service: OrderService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.resetFrom();
  }

  resetFrom(form?: NgForm){
    if (form = null)
     form.resetForm();
    this.service.formData ={
      OrderID: null,
      OrderNo: Math.floor(100000+Math.random()*900000).toString(),
      CustomerID: 0,
      PMethod: '',
      GTotal: 0
    };
    this.service.ordemItems = [];
  }

  AddOrEditOrderItem(OrderItemIndex, OrderID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {OrderItemIndex, OrderID};
    this.dialog.open(OrderItemsComponent,dialogConfig);

  }

}
