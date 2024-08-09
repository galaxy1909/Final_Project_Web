import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild(HeaderComponent) ChildComponent:any;

  constructor() { }

  totalamount = 0;
  subtotal = 0;
  cartItem:any;

  ngOnInit(): void {
    this.getCart();
    this.getTotalAmount();
  }

  getCart(){
    this.cartItem = JSON.parse(localStorage.getItem('cart') as string) ?? [];
    console.log(this.cartItem);
  }


  remove(id:any){
    this.cartItem = localStorage.getItem('cart');
    const cart = JSON.parse(this.cartItem);
    for(let item in cart){
      if(cart[item].id == id){
        cart.splice(item,1);
        localStorage.setItem('cart',JSON.stringify(cart));
        this.getCart();
        this.getTotalAmount();
        this.ChildComponent.getCartItem();
      }
    }
  }



  getTotalAmount(){
    this.subtotal = 0;
    this.getCart();
    this.cartItem.forEach((item:any) => {
      this.subtotal += item.price;
    });

    var tax = this.subtotal * 0.13;
    this.totalamount = this.subtotal + tax;
     }


}
