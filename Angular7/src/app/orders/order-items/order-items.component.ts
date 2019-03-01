import { Component, OnInit, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { OrderService } from 'src/app/shared/order.service';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  isValid: boolean = true;
  isText: boolean = false;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderSevice: OrderService
  ) { }

  ngOnInit() {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);
    if (this.data.OrderItemIndex == null)
      this.formData = {
        OrderItemID: null,
        OrderID: this.data.OrderID,
        ItemID: 0,
        ItemName: '',
        Price: 0,
        Quantity: 0,
        Total: 0
      }
    else
      this.formData = Object.assign({}, this.orderSevice.orderItems[this.data.OrderItemIndex]);
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
      this.formData.ItemName = '';
    }
    else {
      this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
      this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].Name;
    }
    this.updateTotal();
  }

  updateTotal() {
    if (!isNaN(this.formData.Quantity))
     this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
    else
     this.formData.Total = 0;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.OrderItemIndex == null)
        this.orderSevice.orderItems.push(form.value);
      else
        this.orderSevice.orderItems[this.data.OrderItemIndex] = form.value;
      this.dialogRef.close();
    }else{
      this.formData.Quantity
    }
  }

  validateForm(formData: OrderItem) { 
    this.isValid = true;
    if (formData.ItemID == 0 || formData.Quantity == 0)
      this.isValid = false;
    else if (isNaN(formData.Quantity)){
      this.isValid = false;
      this.isText = true;
    }
    return this.isValid;
  }

}
