import { Component } from '@angular/core';
import { Order } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32workshop';

  orderList: Order[] = [];


  newOrder(order: Order){
    this.orderList.push(order);
    console.info("Order list >>>>>>: ",this.orderList);
  
  }
  updateOrderList(order: Order){
    console.info(">>>>> Remove this order: " ,order);
    this.orderList.forEach( (item, index) => {
      if(item === order) {
        this.orderList.splice(index,1)};
    });
    console.info("Updated orderList >>>>", this.orderList)
  }

}
