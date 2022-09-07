import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Input()
  orders! :Order[]

  @Output()
  onDelete = new Subject<Order>();
  
  orderList: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  delete(uuid: string){

    let array = this.orders;
    let deleteThisRecord = array.find(i => i.uuid === uuid);
  
   
    
    let order : Order = deleteThisRecord as Order;
  
    this.onDelete.next(order)
  
  }

}
