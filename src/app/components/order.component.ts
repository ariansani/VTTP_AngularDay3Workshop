import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order } from '../models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form!:FormGroup
  ordersArrayCtrl!:FormArray

  @Output()
  onNewOrder = new Subject<Order>()

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form=this.createForm();
  }

  private createForm(): FormGroup{
    this.ordersArrayCtrl = this.fb.array([], [Validators.required])

    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required,Validators.minLength(3)]),
      mobile:this.fb.control<number>(1,[Validators.required, Validators.min(1)]),
      uuid: this.fb.control<string>(''),
      orders:this.ordersArrayCtrl
    })
  }

  addItem(){
    const order = this.fb.group({
      item: this.fb.control<string>('', [Validators.required,Validators.minLength(5)]),
      quantity: this.fb.control<number>(1, [Validators.min(1), Validators.max(5)])
    })
    this.ordersArrayCtrl.push(order)
  }

  processForm(){
    const data=this.form.value

   
    let order : Order = this.form.value as Order
    order.uuid=uuidv4()
    

    this.onNewOrder.next(order)
  }

  removeOrder(idx:number){
    this.ordersArrayCtrl.removeAt(idx);
  }


}
