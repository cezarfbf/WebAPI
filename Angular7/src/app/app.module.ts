import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';

import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { MatFormFieldModule } from '@angular/material';
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";



@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot()
    // MatDatepickerModule,
    // MatMomentDateModule,
    // MatFormFieldModule,
    // BsDatepickerModule.forRoot()
  ],
  entryComponents: [OrderItemsComponent], 
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
