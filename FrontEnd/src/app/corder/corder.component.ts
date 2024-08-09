import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corder',
  templateUrl: './corder.component.html',
  styleUrls: ['./corder.component.css']
})
export class COrderComponent implements OnInit {

  constructor() { }
   user:any;
   cart:any;
   totalamount = 0;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.getCart();
    this.getTotalAmount();
    this.clearData();
  }

  getCart(){
    this.cart = JSON.parse(localStorage.getItem('cart') as string) ?? [];
    console.log(this.cart);
  }
  
  getTotalAmount(){
    this.totalamount = 0;
    this.cart.forEach((item:any) => {
      this.totalamount += item.price;
    });
    var tax = this.totalamount * 0.13;
    this.totalamount = this.totalamount + tax;
  }

  
  clearData(){
    localStorage.removeItem('cart');
    localStorage.removeItem('user');
  }
}
