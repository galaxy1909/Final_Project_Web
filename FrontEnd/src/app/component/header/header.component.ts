import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart:CartService) { }

  cartItem:any;
  totalCartItem = 0;
  ngOnInit(): void {
    this.getCartItem();
  }

  toggle() {
    const button = document.querySelector('#mb-menu-toggle');
    const header = document.querySelector('#header-wrapper');
      header?.classList.add('active');
  }
  closetoggle() {
    const header = document.querySelector('#header-wrapper');
      header?.classList.remove('active');
  }

  getCartItem(){

    this.cartItem = localStorage.getItem('cart');

    const cart = JSON.parse(this.cartItem);
    this.totalCartItem = cart ? cart.length : 0;
    
  }

}
