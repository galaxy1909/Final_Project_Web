import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any = [];
  constructor() { }

  addToCart(product: any){
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  totalCartItem(){
    let total = 0;
    total = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}').length : 0;
    return total;
  }
}
