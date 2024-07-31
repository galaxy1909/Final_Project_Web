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
  cartItem:any;
  cartItemToArray:any;

  ngOnInit(): void {
    this.getCartItem();
    this.updateCartBadge();
    this.getTotalAmount();
  }

  getCartItem(){
    this.cartItem =  JSON.parse(localStorage.getItem('cart') || '{}');
    }


  remove(id:any){
    this.cartItem = localStorage.getItem('cart');
    const cart = JSON.parse(this.cartItem);
    for(let item in cart){
      if(cart[item].id == id){
        cart.splice(item,1);
        localStorage.setItem('cart',JSON.stringify(cart));
        this.getCartItem();
        this.getTotalAmount();
        this.ChildComponent.getCartItem();
      }
    }
  }


  updateCartBadge(){
    this.ChildComponent.getCartItem();
  }


  getTotalAmount(){
    this.totalamount = 0;
    this.cartItem = localStorage.getItem('cart');
    this.cartItemToArray = JSON.parse(this.cartItem);
    for(let item in this.cartItemToArray){
      this.totalamount += this.cartItemToArray[item].price;
    } }
}
