import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:any;
  cartItem:any;
  constructor(private productService:ProductService,private cart:CartService) { }
  @ViewChild(HeaderComponent) ChildComponent:any;

  ngOnInit(): void {

    this.productService.getAllProduct().subscribe(data=>{
      this.product = data;
      console.log(this.product);
    })

    this.cartItem = localStorage.getItem("cart");

  }
  
  addCart(product:any){
    this.cartItem =  localStorage.getItem("cart");
    
    const cart = JSON.parse(this.cartItem);
    
    for(let item in cart){
      if(cart[item].id == product.id){
        alert("Product is already in cart");
        return;
      }
    }
    this.cart.addToCart(product);
    this.ChildComponent.getCartItem();
  }


}
